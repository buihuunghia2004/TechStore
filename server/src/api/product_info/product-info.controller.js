import { productInfoService } from "./product-info.service"

const getByCategory = async (req, res, next) => {
  try {
    const result = await productInfoService.getByCategory(req.params.category)
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
    const result = await productInfoService.create(req.params.slug, req.body, req.account.username)
    res.status(200).json({
      status:true,
      data:result,
      message:"Success"
    })
  } catch (error) {
    next(error)
  }
}

export const productInfoController = {
  create,
  getByCategory
}