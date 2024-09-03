import { SuccessRes } from "@/utils/SuccessRes"
import { PageRequest } from "@/utils/PageRequest"
import OffsetPaginate from "@/utils/OffsetPaginate"
import OnlyRequest from "@/utils/OnlyRequest"
import brandService from "./brand.service"
import brandDTO from "./brand.dto"

const getBrands = async (req, res, next) => {
  try {
    const options = {
      ...PageRequest(req.query),
      only: OnlyRequest(req.query.only)
    }        
    const result = await brandService.getAll(options)
    res.status(200).json(OffsetPaginate(result, options))
  } catch (error) {
    next(error)
  }
}

const getByCode = async (req, res, next) => {
  try {    
    const only = OnlyRequest(req.query.only,brandDTO.query.only)    
    const result = await brandService.getByCode(req.params.code,only)
    res.status(200).json(result)
  } catch (error) {
    next(error)
  }
}

const createBrand = async (req, res, next) => {
  try {
    const result = await brandService.create(req.body,req.account.username)
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

// const deleteManager = async (req, res, next) => {
//   try {
//     const result = await managerService.deleteById(req.params.id)
//     res.status(200).json({
//       status: result,
//       message: "Success",
//     })
//   } catch (error) {
//     next(error)
//   }
// }

export const brandController = {
  createBrand,
  getBrands,
  getByCode
}