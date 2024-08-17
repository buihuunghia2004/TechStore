import { roleService } from '../services/roleService.js'
import { PageRequest } from '../utils/PageRequest.js'
import { SuccessRes } from '../utils/SuccessRes.js'

const findById = async (req, res, next) => {
  const { id } = req.params
  try {
    const result = await roleService.findById(id)
    SuccessRes(res, result, "Success")
  } catch (error) {
    next(error)
  }
}

const findOne = async (req, res, next) => {
  const { id } = req.params
  try {
    const result = await roleService.findOne(id)
    SuccessRes(res, result, "Success")
  } catch (error) {
    next(error)
  }
}

const findMany = async (req, res, next) => {
  const pageRequest = PageRequest({
    isPagination: req.query.isPagination,
    page: req.query.page,
    size: req.query.size,
    sort: req.query.sort
  })
  try {
    const result = await roleService.findMany({pageRequest})    
    SuccessRes(res, result, "Success")
  } catch (error) {
    next(error)
  }
}

const create = async (req, res, next) => {
  try {
    const result = await roleService.create(req.body)
    SuccessRes(res, result, "Success")
  } catch (error) {
    next(error)
  }
}

const updateById = async (req, res, next) => {
  const { id } = req.params
  try {
    const result = await roleService.updateById(id, req.body)
    SuccessRes(res, result, "Success")
  } catch (error) {
    next(error)
  }
}

const deleteById = async (req, res, next) => {
  const { id } = req.params
  try {
    const result = await roleService.deleteById(id)
    SuccessRes(res, result, "Success")
  } catch (error) {
    next(error)
  }
}
export const roleController ={
  findById,
  findOne,
  findMany,
  create,
  updateById,
  deleteById
}