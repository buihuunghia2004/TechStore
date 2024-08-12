import { ManagerRole } from "~/models/managerRoleModel"

const findById = async (id,options) => {
    const {populate=[], projection={} } = options || {}
    const result = await ManagerRole.findById(id,projection)
    .populate(populate)
    .exec()
    return result
}
const findOne = async (options) => {
    const {filter = {},populate=[], projection={}} = options || {}
    const result = await ManagerRole.findOne(filter,projection)
    .populate(populate)
    .exec()
    return result
}
const findMany = async (options) => {
  const {
    filter = {},
    populate = [],
    projection = {},
    pageRequest,
  } = options || {};  
  let query = ManagerRole.find(filter, projection).populate(populate);
  if (pageRequest.sort) {
    query = query.sort(pageRequest.sort);
  }
  if (pageRequest.isPagination) {
    query = query.skip(pageRequest.skip || 0).limit(pageRequest.limit || 10);
  }
  return await query.exec();
}
const create = async (data) => {
  const managerRole = new ManagerRole(data);
  return await managerRole.save();
}
const updateById = async (id, data) => {
  return await ManagerRole.findByIdAndUpdate(id, data, { new: true });
}
const deleteById = async (id) => {
  return await ManagerRole.findByIdAndDelete(id);
}

export const managerRoleService ={
    findById,
    findOne,
    findMany,
    create,
    updateById,
    deleteById
}