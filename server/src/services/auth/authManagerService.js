import { StatusCodes } from "http-status-codes";
import bcryptjs from "bcryptjs";
import { Manager, ManagerRelationships } from "../../models/managerModel.js";
import ApiError from "../../utils/ApiError.js";
import { jwtHelper } from "../../helpers/jwtHelper.js";
import { env } from "../../config/environment.js";
const register = async (data, creator) => {
  //check manager exist by emmail or username
  const managerFind = await Manager.findOne({
    $or: [{ email: data.email }, { username: data.username }],
  });
  if (managerFind) {
    throw new ApiError(StatusCodes.BAD_REQUEST, "Manager already exist");
  }
  //create manager
  const manager = new Manager(data);
  //hash password
  const salt = bcryptjs.genSaltSync(10);
  manager.password = bcryptjs.hashSync(data.password, salt);
  manager.password = bcryptjs.manager.createdBy = creator;
  manager.updatedBy = creator;
  return manager.save();
};
const login = async (login, password) => {
  // const manager = await Manager.findOne({
  //   $or: [{ email: login }, { username: login }],
  // });
  let manager = await Manager.aggregate([
    { $match: { $or: [{ email: login }, { username: login }] } },
    ...ManagerRelationships.roles,
    { $project: { username: 1, email: 1, roles: 1, password: 1 } },
    { $limit: 1 },
  ]).exec();
  manager = manager[0];  
  if (!manager) {
    throw new ApiError(StatusCodes.NOT_FOUND, "Manager not found");
  }
  if (!bcryptjs.compareSync(password, manager.password)) {
    throw new ApiError(StatusCodes.BAD_REQUEST, "Password not match");
  }

  manager.roles = manager.roles.map((role) => role.name);
  
  //create token
  const token = jwtHelper.generateToken(manager, env.ACCESS_TOKEN_SECRET, env.ACCESS_TOKEN_LIFE);
  return token;
};

export const authManagerService = {
  register,
  login,
};
