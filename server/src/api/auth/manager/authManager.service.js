import { StatusCodes } from "http-status-codes";
import bcryptjs from "bcryptjs";
import { env } from "@/config/environment.js";
import { jwtHelper } from "@/helpers/jwtHelper.js";
import ApiError from "@/utils/ApiError.js";
import { ManagerModel } from "@/api/manager/manager.model";

const login = async (login, password) => {  
  let manager = await ManagerModel.findOne(
    { $or: [{ email: login }, { username: login }] },
    { email: 1, username: 1, roles: 1, password: 1 }
  ).exec();  

  //check exist
  if (!manager) {
    throw new ApiError(
      StatusCodes.UNAUTHORIZED,
      "Unauthorized",
      ['1001-Manager not found']
    );
  }

  //check password
  if (!bcryptjs.compareSync(password, manager.password)) {
    throw new ApiError(
      StatusCodes.UNAUTHORIZED,
      "Unauthorized",
      ['2001-Password not match']
    );
  }

  //create token
  const token = jwtHelper.generateToken({
    _id: manager._id,
    username: manager.username,
    email: manager.email,
    roles: manager.roles,
  }, env.ACCESS_TOKEN_SECRET, env.ACCESS_TOKEN_LIFE);

  return token;
};

export const authManagerService = {
  login,
};
