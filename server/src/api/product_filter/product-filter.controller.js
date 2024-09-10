import { filterProductInfoCateService } from "./product-filter.service"

const getByCategory = async (req, res, next) => {
  try {    
    const result = await filterProductInfoCateService.getByCategory(req.params.category)
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
    const result = await filterProductInfoCateService.create(req.params.slug, req.body, req.account.username)
    res.status(200).json({
      status:true,
      data:result,
      message:"Success"
    })
  } catch (error) {
    next(error)
  }
}

export const filterProductInfoByCateController = {
  create,
  getByCategory
}