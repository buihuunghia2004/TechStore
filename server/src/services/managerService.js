import { Manager } from "~/models/managerModel";
import {
  ManagerRole,
  ManagerRoleCollectionName,
} from "~/models/managerRoleModel";
import { Role, RoleCollectionName } from "~/models/roleModel";
import ManagerDTO from "./dto/ManagerDTO";
import { _idToId } from "~/utils/_idToId";
const lookupConfig = {
  roles: [
    {
      $lookup: {
        from: ManagerRoleCollectionName,
        localField: "_id",
        foreignField: "managerId",
        as: ManagerRoleCollectionName,
      },
    },
    {
      $lookup: {
        from: RoleCollectionName,
        localField: "managerRoles.roleId",
        foreignField: "_id",
        as: RoleCollectionName,
      },
    },
  ],
};
const findById = async (id, options) => {
  const { populate = [], projection = {} } = options || {};
  const result = await Manager.findById(id, projection)
    .populate(populate)
    .exec();
  return result;
};
const findOne = async (options) => {
  const { filter = {}, populate = [], projection = {} } = options || {};
  const pipeline= []
  pipeline.push({$match:filter})
  populate.map((item) => {
    pipeline.push(...lookupConfig[item]);
  })
  if (Object.keys(projection).length > 0) {
    pipeline.push({ $project: projection });
  }
  return ManagerDTO.fromEntity( await Manager.aggregate(pipeline))
};
const findMany = async (options) => {
  const {
    filter = {},
    populate = [],
    projection = {},
    pageRequest,
  } = options || {};
  const pipeline = [
    {
      $match: filter,
    },
  ];
  populate.map((item) => {
    pipeline.push(...lookupConfig[item]);
  });
  if (Object.keys(projection).length > 0) {
    pipeline.push({ $project: projection });
  }
  if (pageRequest.isPagination) {
    if (pageRequest.skip) {
      pipeline.push({ $skip: pageRequest.skip });
    }
    if (pageRequest.limit) {
      pipeline.push({ $limit: pageRequest.limit });
    }
  }
  pipeline.push({ $sort: pageRequest.sort });
  return ManagerDTO.fromEnties(await Manager.aggregate(pipeline));
};
const create = async (data, creater) => {
  const roleIds = data.roles.map((role) => role.id);
  const manager = new Manager(data);
  manager.createdBy = creater;
  manager.updatedBy = creater;
  const result = await manager.save();
  const rolesFind = await Role.find({ _id: { $in: roleIds } });
  const managerRoles = rolesFind.map((role) => {
    return { roleId: role._id, managerId: result._id };
  });
  await ManagerRole.insertMany(managerRoles);
  return { ...result.toObject(), roles: rolesFind };
};
const updateById = async (id, data) => {
  return await Manager.findByIdAndUpdate(id, data, { new: true });
};
const deleteById = async (id) => {
  return await Manager.findByIdAndDelete(id);
};

export const managerService = {
  findById,
  findOne,
  findMany,
  create,
  updateById,
  deleteById,
};
