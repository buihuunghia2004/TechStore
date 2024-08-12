import { PageRequest } from "~/utils/PageRequest";
import { SuccessRes } from "~/utils/SuccessRes";
import { managerService } from "~/services/managerService";
import { populate } from "dotenv";

const findById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await managerService.findById(id);
    SuccessRes(res, result, "Success");
  } catch (error) {
    next(error);
  }
};

const findOne = async (req, res, next) => {
  try {
    const result = await managerService.findOne({filter:{}});
    SuccessRes(res, result, "Success");
  } catch (error) {
    next(error);
  }
};

const findMany = async (req, res, next) => {
  const pageRequest = PageRequest({
    isPagination: req.query.isPagination,
    page: req.query.page,
    size: req.query.size,
    sort: req.query.sort,
  });
  try {
    const result = await managerService.findMany({
      pageRequest,
      populate: ["roles"],
    });
    SuccessRes(res, result, "Success");
  } catch (error) {
    next(error);
  }
};

const create = async (req, res, next) => {
  try {
    const result = await managerService.create(req.body, "admin");
    SuccessRes(res, result, "Success");
  } catch (error) {
    next(error);
  }
};

const updateById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await managerService.updateById(id, req.body);
    SuccessRes(res, result, "Success");
  } catch (error) {
    next(error);
  }
};

const deleteById = async (req, res, next) => {
  const { id } = req.params;
  try {
    const result = await managerService.deleteById(id);
    new ApiError(200, "Success");
    SuccessRes(res, result, "Success");
  } catch (error) {
    next(error);
  }
};
export const managerController = {
  findById,
  findOne,
  findMany,
  create,
  updateById,
  deleteById,
};
