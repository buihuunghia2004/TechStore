import ApiError from "@/utils/ApiError";
import { CategoryModel } from "../category/category.model";
import { ProductInfoCateModel } from "./product-info-by-cate.model";
import { StatusCodes } from "http-status-codes";

const getByCategory = async (categorySlug) => {
  const category = await CategoryModel
    .findOne({ slug: categorySlug })
    .populate('productInfos');
  if (!category) {
    return []
  } 
  return category.productInfos
}

const create = async ( categorySlug, data, creator) => {  
  const category = await CategoryModel.findOne({ slug: categorySlug });
  if (!category) {
    throw new ApiError(StatusCodes.BAD_REQUEST, "Category not found", [
      categoryValidate.errorMap.HANDLE.categoryNotFound,
    ]);
  }
  
  try {
    const productInfoCate = new ProductInfoCateModel({
      name: data.name,
      code: data.code,
      categoryId: category._id,
      createdBy: creator,
      updatedBy: creator,
    });

    await productInfoCate.save();

    category.productInfos.push(productInfoCate._id);
    await category.save();
    return productInfoCate;
  }catch (error) {    
    throw new ApiError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      "Something went wrong",
      [brandValidate.errorMap.HANDLE.internalServerError]
    );
  }
}

export const productInfoByCateService = {
  create,
  getByCategory
}