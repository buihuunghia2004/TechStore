import { StatusCodes } from "http-status-codes";
import { Manager, ManagerRelationships } from "../models/managerModel.js";
import { ManagerRole } from "../models/managerRoleModel.js";
import { Role } from "../models/roleModel.js";
import ApiError from "../utils/ApiError.js";
import bcryptjs from "bcryptjs";
import { ObjectId } from "mongodb";
const findById = async (id, options) => {
  const { populate = [], projection = { managerroles: 0, password: 0 } } = options || {};
  const pipeline = [];
  pipeline.push({ $match: { _id: new ObjectId(id) } });
  populate.map((item) => {
    pipeline.push(...ManagerRelationships[item]);
  });
  if (Object.keys(projection).length > 0) {
    pipeline.push({ $project: projection });
  }
  pipeline.push({ $limit: 1 });
  return await Manager.aggregate(pipeline);
};

const findOne = async (options) => {
  const { filter = {}, populate = [], projection = {} } = options || {};
  const pipeline = [];
  pipeline.push({ $match: filter });
  populate.map((item) => {
    pipeline.push(...ManagerRelationships[item]);
  });
  if (Object.keys(projection).length > 0) {
    pipeline.push({ $project: projection });
  }
  return await Manager.aggregate(pipeline);
};

const findMany = async (options) => {
  let {
    filter = {},
    populate = [],
    projection = { managerroles: 0, password: 0 },
    pageRequest,
  } = options || {};
  const pipeline = [
    {
      $match: filter,
    },
  ];
  populate.map((item) => {
    pipeline.push(...ManagerRelationships[item]);
  });
  if (Object.keys(projection).length > 0) {
    pipeline.push({ $project: projection });
  }
  if (pageRequest.pagination) {
    if (pageRequest.skip) {
      pipeline.push({ $skip: pageRequest.skip });
    }
    if (pageRequest.limit) {
      pipeline.push({ $limit: pageRequest.limit });
    }
  }
  pipeline.push({ $sort: pageRequest.sort });
  const result = await Manager.aggregate(pipeline);

  result.map((item) => {
    item.roles = item.roles.map((role) => role.name);
  });
  return result;
};

const insertOne = async (data, creator) => {
  //check manager exist by emmail or username
  const managerFind = await Manager.findOne({
    $or: [{ email: data.email }, { username: data.username }],
  });
  if (managerFind) {
    throw new ApiError(StatusCodes.BAD_REQUEST, "Manager already exist");
  }
  //check roles exist
  const rolesFind = await Role.find({ name: { $in: data.roles } });
  if (rolesFind.length !== data.roles.length) {
    throw new ApiError(StatusCodes.BAD_REQUEST, "Roles not found");
  }
  //save manager
  const manager = new Manager(data);
  //hash password
  const salt = bcryptjs.genSaltSync(10);
  manager.password = bcryptjs.hashSync(data.password, salt);
  manager.createdBy = creator;
  manager.updatedBy = creator;
  await manager.save();
  //save manager roles
  const managerRoles = rolesFind.map((role) => {
    return { role: role.name, managerId: manager._id };
  });
  await ManagerRole.insertMany(managerRoles);

  manager._doc.roles = rolesFind.map((role) => role.name);
  delete manager._doc.password;
  return manager;
};

const updateById = async (id, data, updator) => {
  //find manager
  const managerFind = await Manager.findById(id);
  if (!managerFind) {
    throw new ApiError(StatusCodes.NOT_FOUND, "Manager not found");
  }

  //update manager
  Object.keys(data).forEach((key) => {
    if (key === "password") {
      const salt = bcryptjs.genSaltSync(10);
      data[key] = bcryptjs.hashSync(data[key], salt);
    }
    managerFind[key] = data[key];
  });
  managerFind.updatedBy = updator;
  await managerFind.save();

  //update manager roles
  if (data.roles) {
    await ManagerRole.deleteMany({ managerId: id });
    const roleNames = data.roles.map((role) => role.name);
    const managerroles = roleNames.map((roleName) => {
      return { role: roleName, managerId: id };
    });
    await ManagerRole.insertMany(managerroles);
  }

  return managerFind;
};

const deleteById = async (id) => {
  const deleted = await Manager.findByIdAndDelete(id);
  if (deleted) {
    await ManagerRole.deleteMany({ managerId: id });
  } else {
    throw new ApiError(StatusCodes.NOT_FOUND, "Manager not found");
  }
  return deleted;
};

export const managerService = {
  findById,
  findOne,
  findMany,
  insertOne,
  updateById,
  deleteById,
};
