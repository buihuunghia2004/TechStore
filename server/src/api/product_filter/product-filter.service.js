import ApiError from "@/utils/ApiError";
import { CategoryModel } from "../category/category.model";
import { StatusCodes } from "http-status-codes";
import { ProductFilterModel } from "./product-filter.model";
import { productFilterHandleErrors } from "./product-filter.validate";
import { ERRORS } from "@/utils/Constants";
import ResErros from "@/common/ResErrors";

const getByCategory = async (categorySlug) => {  
  const result = await CategoryModel
    .findOne({ slug: categorySlug },{productFilters:1})
    .populate('productFilters');
    
  if (!result) {
    return []
  } 
  return result.productFilters
}

const create = async ( categorySlug, data, creator) => {  
  const category = await CategoryModel.findOne({ slug: categorySlug });
  if (!category) {
    throw new ApiError(StatusCodes.BAD_REQUEST, "Bad request", [
      productFilterHandleErrors.create.categoryNotFound
    ]);
  }
  
  try {
    const productFilter = new ProductFilterModel({
      name: data.name,
      code: data.code,
      categoryId: category._id,
      createdBy: creator,
      updatedBy: creator,
    });
    await productFilter.save();

    category.productFilters.push(productFilter._id);
    await category.save();
    return productFilter;
  }catch (error) {
    if (error.code === ERRORS.DUPLICATE) {
      throw new ApiError(
        StatusCodes.BAD_REQUEST,
        "Bad request",
        [productFilterHandleErrors.create.filterExists]
      );
    }
    throw new ApiError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      "Something went wrong",
      [ResErros.INTERNAL_SERVER_ERROR]
    );
  }
}

const deleteById = async (id) => {
  try{
    const filter = await ProductFilterModel.findByIdAndDelete(id)

    if (!filter) {
      throw new ApiError(StatusCodes.NOT_FOUND, "Product info not found", [  
        productFilterHandleErrors.delete.filterNotFound
      ]);
    }
    
    // remove filter from category
    const category = await CategoryModel.findById(filter.categoryId)
    category.productFilters.pull(filter._id)
    await category.save()
    
  }catch(error){
    console.log(error);
    throw new ApiError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      "Something went wrong",
      [ResErros.INTERNAL_SERVER_ERROR]
    )
  }
}

export const productFilterService = {
  create,
  getByCategory,
  deleteById
}