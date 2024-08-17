import { SuccessRes } from "../utils/SuccessRes.js";
import { managerService } from "../services/managerService.js";
import optionsRequest from "../utils/OptionsRequest.js";
import { PageRequest } from "../utils/PageRequest.js";

const findById = async (req, res, next) => {
  try {
    const options = optionsRequest(req.query);
    options.populate = ["roles"];
    if (req.query.only) {
      options.projection.roles = 1;
    }
    const result = await managerService.findById(req.params.id, options);
    SuccessRes(res, result, "Success");
  } catch (error) {
    next(error);
  }
};
const findOne = async (req, res, next) => {
  try {
    const options = optionsRequest(req.query);
    options.populate = ["roles"];
    if (req.query.only) {
      options.projection.roles = 1;
    }
    const result = await managerService.findOne(options);
    SuccessRes(res, result, "Success");
  } catch (error) {
    next(error);
  }
};

const findMany = async (req, res, next) => {
  const options = optionsRequest(req.query);
  options.pageRequest = PageRequest(req.query);
  options.populate = ["roles"];
  if (req.query.only) {
    options.projection.roles = 1;
  }
  try {
    const result = await managerService.findMany(options);
    SuccessRes(res, result, "Success");
  } catch (error) {
    next(error);
  }
};

const insertOne = async (req, res, next) => {
  try {
    const result = await managerService.insertOne(
      req.body,
      req.account.username
    );
    SuccessRes(res, result, "Success");
  } catch (error) {
    next(error);
  }
};

const updateById = async (req, res, next) => {
  try {
    const result = await managerService.updateById(
      req.params.id,
      req.body,
      req.account.username
    );
    SuccessRes(res, result, "Success");
  } catch (error) {
    next(error);
  }
};

const deleteById = async (req, res, next) => {
  try {
    const result = await managerService.deleteById(req.params.id);
    SuccessRes(res, result, "Success");
  } catch (error) {
    next(error);
  }
};
export const managerController = {
  findOne,
  findMany,
  findById,
  insertOne,
  updateById,
  deleteById,
};
