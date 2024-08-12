import { Category } from "~/models/categoryModel";
import { SuccessRes } from "~/utils/SuccessRes";

const findById = async (id, options) => {
  const { populate = [], projection = {} } = options || {};
  const result = await Category.findById(id, projection)
    .populate(populate)
    .exec();
  return result;
};
const findOne = async (options) => {
  const { filter = {}, populate = [], projection = {} } = options || {};
  const result = await Category.findOne(filter, projection)
    .populate(populate)
    .exec();
  return result;
};
const findMany = async (options) => {
  const {
    filter = {},
    populate = [],
    projection = {},
    pageRequest,
  } = options || {};
  if (pageRequest.isPagination) {
    return await Category.find(filter, projection)
      .populate(populate)
      .sort(pageRequest.sort)
      .skip(pageRequest.skip)
      .limit(pageRequest.limit)
      .exec();
  }
  return await Category.find(filter, projection)
  .populate(populate)
  .sort(pageRequest.sort)
  .exec();
};
const create = async (data) => {
  const category = new Category(data);
  return await category.save();
};
const updateById = async (id, data) => {
  return await Category.findByIdAndUpdate(id, data, { new: true });
};
const deleteById = async (id) => {
  return await Category.findByIdAndDelete(id);
};

export const categoryService = {
  findById,
  findOne,
  findMany,
  create,
  updateById,
  deleteById,
};
