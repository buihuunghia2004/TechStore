import ApiError from "@/utils/ApiError";
import { CategoryModel } from "../category/category.model";
import { StatusCodes } from "http-status-codes";
import { FilterProductInfoCateModel } from "./product-filter.model";

const getByCategory = async (categorySlug) => {  
  const category = await CategoryModel
    .findOne({ slug: categorySlug })
    .populate('filterProductInfos');
  console.log(category);
    
  if (!category) {
    return []
  } 
  return category.filterProductInfos
}

const create = async ( categorySlug, data, creator) => {  
  const category = await CategoryModel.findOne({ slug: categorySlug });
  if (!category) {
    throw new ApiError(StatusCodes.BAD_REQUEST, "Category not found", [
      categoryValidate.errorMap.HANDLE.categoryNotFound,
    ]);
  }
  
  try {
    const filterProductInfoCate = new FilterProductInfoCateModel({
      name: data.name,
      code: data.code,
      categoryId: category._id,
      createdBy: creator,
      updatedBy: creator,
    });

    await filterProductInfoCate.save();

    category.filterProductInfos.push(filterProductInfoCate._id);
    await category.save();
    return filterProductInfoCate;
  }catch (error) {    
    throw new ApiError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      "Something went wrong",
      [brandValidate.errorMap.HANDLE.internalServerError]
    );
  }
}

export const filterProductInfoCateService = {
  create,
  getByCategory
}