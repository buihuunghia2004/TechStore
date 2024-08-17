import { Role } from "../models/roleModel.js";

const findById = async (id, options) => {
  const { populate = [], projection = {} } = options || {};
  const result = await Role.findById(id, projection).populate(populate).exec();
  return result;
};
const findOne = async (options) => {
  const { filter = {}, populate = [], projection = {} } = options || {};
  const result = await Role.findOne(filter, projection)
    .populate(populate)
    .exec();
  return result;
};
const findMany = async (options) => {
  const {
    filter = {},
    populate = [],
    projection = {},
    pageRequest = {},
  } = options || {};
  let query = Role.find(filter, projection).populate(populate);
  if (pageRequest.sort) {
    query = query.sort(pageRequest.sort);
  }
  if (pageRequest.isPagination) {
    query = query.skip(pageRequest.skip).limit(pageRequest.limit);
  }
  return RoleDTO.fromEntities(await query.exec());
};

const create = async (data) => {
  const role = new Role(data);
  return await role.save();
};
const updateById = async (id, data) => {
  return await Role.findByIdAndUpdate(id, data, { new: true });
};
const deleteById = async (id) => {
  return await Role.findByIdAndDelete(id);
};

export const roleService = {
  findById,
  findOne,
  findMany,
  create,
  updateById,
  deleteById,
};
