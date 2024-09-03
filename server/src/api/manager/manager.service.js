import bcryptjs from "bcryptjs";
import ApiError from "@/utils/ApiError";
import { ManagerModel } from "./manager.model";
import { StatusCodes } from "http-status-codes";
import Omit from "@/utils/Omit";
import { managerValidate } from "./manager.validate";
import { ERRORS } from "@/utils/Constants";

const getAll = async ({
  isPagination = false,
  limit = 0,
  skip = 0,
  only = { password: 0 },
  sorts = {},
} = {}) => {
  const query = ManagerModel.find({}, only);

  if (isPagination) {
    if (limit > 0) {
      query.limit(limit);
    }
    if (skip > 0) {
      query.skip(skip);
    }
  }

  if (sorts && Object.keys(sorts).length > 0) {
    query.sort(sorts);
  }

  const [result, total] = await Promise.all([
    query.exec(),
    ManagerModel.countDocuments(),
  ]);

  return [result, total];
};

const create = async (manager, creater) => {
  const newManager = new ManagerModel({
    ...manager,
    createdBy: creater,
    updatedBy: creater,
    password: bcryptjs.hashSync(manager.password, bcryptjs.genSaltSync(10)),
  });
  try {
    await newManager.save();
  } catch (error) {    
    if (error.code === ERRORS.DUPLICATE) {
      throw new ApiError(StatusCodes.BAD_REQUEST, "Manager already exists", [
        Object.keys(error.keyValue) === "email" ? managerValidate.errorMap.HANDLE.emailExists : managerValidate.errorMap.HANDLE.nameExists,
      ]);
    }
    throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Something went wrong", [managerValidate.errorMap.HANDLE.internalServerError]);
  }
  return Omit(newManager._doc, ["password"]);
};

const updateById = async (id, manager, updater) => {
  const managerFind = await ManagerModel.findById(id);
  if (!managerFind) {
    throw new ApiError(StatusCodes.BAD_REQUEST, "Manager not found", [
      managerValidate.errorMap.HANDLE.managerNotFound,
    ]);
  }

  const managerKeys = Object.keys(manager);
  managerKeys.forEach((key) => {
    managerFind[key] = manager[key];
  });
  managerFind.updatedBy = updater;

  try {
    await managerFind.save();
  } catch (error) {
    if (error.code === ERRORS.DUPLICATE) {
      throw new ApiError(StatusCodes.BAD_REQUEST, "Manager already exists", [
        managerValidate.errorMap.HANDLE[Object.keys(error.keyValue)].exists,
      ]);
    }
    throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Something went wrong", [managerValidate.errorMap.HANDLE.internalServerError]);
  }
  return Omit(managerFind._doc, ["password"]);
};

const deleteById = async (id) => {
  const managerFind = await ManagerModel.findById(id);
  if (!managerFind) {
    throw new ApiError(StatusCodes.BAD_REQUEST, "Bad Request", [
      managerValidate.errorMap.HANDLE.managerNotFound,
    ]);
  }

  try {
    await managerFind.deleteOne();
    return true;
  } catch (error) {
    throw new ApiError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      "Something went wrong",
      [managerValidate.errorMap.HANDLE.internalServerError]
    );
  }
};

const managerService = {
  getAll,
  create,
  updateById,
  deleteById,
};

export default managerService;
