import { productFilterService } from "./product-filter.service"

const getByCategory = async (req, res, next) => {
  try {    
    const result = await productFilterService.getByCategory(req.params.slug)
    res.status(200).json({
      status:true,
      data:result,
      message:"Success"
    })
  } catch (error) {
    next(error)
  }
}

const create = async (req, res, next) => {  
  try {
    const result = await productFilterService.create(req.params.slug, req.body, req.account.username)
    res.status(200).json({
      status:true,
      data:result,
      message:"Success"
    })
  } catch (error) {
    next(error)
  }
}

const deleteById = async (req, res, next) => {
  try {    
    const result = await productFilterService.deleteById(req.params.id)
    res.status(200).json({
      status:true,
      data:result,
      message:"Success"
    })
  } catch (error) {
    next(error)
  }
}

export const productFilterController = {
  create,
  getByCategory,
  deleteById
}