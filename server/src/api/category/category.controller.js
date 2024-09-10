import { PageRequest } from "@/utils/PageRequest"
import OffsetPaginate from "@/utils/OffsetPaginate"
import OnlyRequest from "@/utils/OnlyRequest"
import { categoryService } from "./category.service"
import categoryDTO from "./category.dto"

const getAll = async (req, res, next) => {
  try {
    const options = {
      ...PageRequest(req.query),
      only: OnlyRequest(req.query.only,categoryDTO.query.only),
    }            
    const result = await categoryService.getAll(options)
    res.status(200).json(OffsetPaginate(result, options))
  } catch (error) {
    next(error)
  }
}

// const getByCode = async (req, res, next) => {
//   try {    
//     const only = OnlyRequest(req.query.only,brandDTO.query.only)    
//     const result = await brandService.getByCode(req.params.code,only)
//     res.status(200).json(result)
//   } catch (error) {
//     next(error)
//   }
// }

const create = async (req, res, next) => {  
  try {
    req.body.imagePath = req.file.path
    const result = await categoryService.create(req.body,req.account.username)
    res.status(200).json({
      status:true,
      data:result,
      message:"Success"
    })
  } catch (error) {
    next(error)
  }
}

const addBrandToCategory = async (req, res, next) => {  
  try {
    const result = await categoryService.addBrandToCategory(req.body,req.account.username)
    res.status(200).json({
      status:true,
      data:result,
      message:"Success"
    })
  } catch (error) {
    next(error)
  }
}

// const updateManager = async (req, res, next) => {
//   try {
//     const result = await managerService.updateById(req.params.id,req.body,req.account.username)
//     SuccessRes(res, result, "Success")
//   } catch (error) {
//     next(error)
//   }
// }

const deleteById = async (req, res, next) => {
  try {
    const result = await categoryService.deleteById(req.params.id)
    res.status(200).json({
      status: result,
      message: "Success",
    })
  } catch (error) {
    next(error)
  }
}

export const categoryController = {
  getAll,
  create,
  addBrandToCategory,
  deleteById
}