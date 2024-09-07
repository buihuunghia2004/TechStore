import FilterProductInfoCateModel from "../../models/filter_product_info_by_cate.model.js";
import { FilterModel } from "./filter.model.js";

const create = async (filterCateId, filter) => {
  const filterCate = await FilterProductInfoCateModel.findById(filterCateId,{})
  if(!filterCate){
    throw new ApiError(StatusCodes.BAD_REQUEST, 'Filter not found')
  }

  const filter = new FilterModel({
    name: filter.name,
    code: filter.code,
    filterProductInfoCateId: filterCateId
  })
  await filter.save()
  filterCate.filters.push(filter._id)
  
  await filterCate.save()
  return filter
}

export const filterService = {
  create
}