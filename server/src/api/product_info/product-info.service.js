import ApiError from "@/utils/ApiError";
import { CategoryModel } from "../category/category.model";
import { ProductInfoModel } from "./product-info.mode.";
import { StatusCodes } from "http-status-codes";
import { productInfoValidate } from "./product-info.validate";

const getInfosByCategory = async (cateSlug) => {
  return await CategoryModel
    .findOne({ slug: cateSlug })
    .populate('productInfos');
}

const create = async ( cateSlug, data, creator) => {  
  //find category by slug
  const category = await CategoryModel.findOne({ slug: cateSlug });
  if (!category) {
    throw new ApiError(StatusCodes.BAD_REQUEST, "Bad request", [
      categoryValidate.errorMap.HANDLE.categoryNotFound,
    ]);
  }
  
  try {
    const productInfo = new ProductInfoModel({
      name: data.name,
      code: data.code,
      categoryId: category._id,
      createdBy: creator,
      updatedBy: creator,
    });

    await productInfo.save();

    category.productInfos.push(productInfo._id);
    await category.save();
    return productInfo;
  }catch (error) {
    console.log(error);
    throw new ApiError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      "Something went wrong",
      [brandValidate.errorMap.HANDLE.internalServerError]
    );
  }
}

const deleteInfo = async (id) => {
  try{
    const deleted = await ProductInfoModel.findByIdAndDelete(id)

    if (deleted) {
      throw new ApiError(StatusCodes.BAD_REQUEST, "Product info not found", [  
        productInfoValidate.errorMap.HANDLE.productInfoNotFound,
      ]);
    }
  }catch(error){
    console.log(error);
    throw new ApiError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      "Something went wrong",
      []
    )
  }
}

export const productInfoService = {
  create,
  getInfosByCategory,
  deleteInfo
}