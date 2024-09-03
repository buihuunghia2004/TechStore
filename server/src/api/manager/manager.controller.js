import { SuccessRes } from "@/utils/SuccessRes"
import managerService from "./manager.service"
import { PageRequest } from "@/utils/PageRequest"
import OffsetPaginate from "@/utils/OffsetPaginate"
import OnlyRequest from "@/utils/OnlyRequest"
import managerDTO from "./manager.dto"

const getManagers = async (req, res, next) => {
  try {
    const options = {
      ...PageRequest(req.query),
      only: OnlyRequest(req.query.only,managerDTO.query.only),
    }        
    const result = await managerService.getAll(options)
    res.status(200).json(OffsetPaginate(result, options))
  } catch (error) {
    next(error)
  }
}

const createManager = async (req, res, next) => {
  try {
    const result = await managerService.create(req.body,req.account.username)
    res.status(200).json({
      status: true,
      data: result,
      message: "Success",
    })
  } catch (error) {
    next(error)
  }
}

const updateManager = async (req, res, next) => {
  try {
    const result = await managerService.updateById(req.params.id,req.body,req.account.username)
    SuccessRes(res, result, "Success")
  } catch (error) {
    next(error)
  }
}

const deleteManager = async (req, res, next) => {
  try {
    const result = await managerService.deleteById(req.params.id)
    res.status(200).json({
      status: result,
      message: "Success",
    })
  } catch (error) {
    next(error)
  }
}

export const managerController = {
  getManagers,
  createManager,
  updateManager,
  deleteManager
}