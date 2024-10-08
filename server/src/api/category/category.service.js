import ApiError from "@/utils/ApiError";
import { StatusCodes } from "http-status-codes";
import { CategoryModel } from "./category.model";
import { ERRORS } from "@/utils/Constants";
import slugify from "@/utils/slugify";
import { categoryValidate } from "./category.validate";
import cloudinary from "@/config/cloundinary";
import fs from "fs";

const getAll = async ({
  isPagination = false,
  limit = 0,
  skip = 0,
  only = {},
  sorts = {},
} = {}) => {  
  const query = CategoryModel.find({}, only)

  if (isPagination) {
    if (limit > 0) {
      query.limit(limit);
    }
    if (skip > 0) {
      query.skip(skip);
    }
  }

  if (sorts && Object.keys(sorts).length > 0) {
    query.sort(sorts);
  }

  const [result, total] = await Promise.all([
    query.exec(),
    CategoryModel.countDocuments(),
  ]);

  return [result, total];
};

// const getBySlug = async (code,only) => {
//   const category = await CategoryModel.findOne({ code: code },only);
//   if (!category) {
//     throw new ApiError(StatusCodes.BAD_REQUEST, "Brand not found", [
//       brandValidate.errorMap.HANDLE.brandNotFound,
//     ])
//   }
//   return category
// }

const create = async (category, creater) => {
  try {
    const uploadedFile = await cloudinary.uploader.upload(category.imagePath, {
      folder: "categories",
      public_id: slugify(category.name),
      overwrite: true,
    });
    fs.unlinkSync(category.imagePath);

    const newCategory = new CategoryModel({
      name: category.name,
      imgUrl: uploadedFile.secure_url,
      imgPId: uploadedFile.public_id,
      slug: slugify(category.name),
      createdBy: creater,
      updatedBy: creater,
    });

    await newCategory.save();
    
    return newCategory;
  } catch (error) {
    console.log(error);
    
    if (error.code === ERRORS.DUPLICATE) {
      throw new ApiError(StatusCodes.BAD_REQUEST, "Category already exists", [
        categoryValidate.errorMap.HANDLE[Object.keys(error.keyValue)].exists,
      ]);
    }
    throw new ApiError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      "Something went wrong",
      [categoryValidate.errorMap.HANDLE.internalServerError]
    );
  }
};

const addBrandToCategory = async ( categorySlug, brand, creator) => {  
  const category = await CategoryModel.findOne({ slug: categorySlug });
  if (!category) {
    throw new ApiError(StatusCodes.BAD_REQUEST, "Category not found", [
      categoryValidate.errorMap.HANDLE.categoryNotFound,
    ]);
  }

  try {
    // const uploadedFile = await cloudinary.uploader.upload(brand.imagePath, {
    //   folder: "brands",
    //   public_id: slugify(brand.name),
    //   overwrite: true,
    // });
    // fs.unlinkSync(brand.imagePath);

    const newBrand = new CategoryModel({
      name: brand.name,
      code: slugify(brand.name),
      // imgUrl: uploadedFile.secure_url,
      // imgPId: uploadedFile.public_id,
      imgUrl:'link',
      imgPId:'link',
      slug: slugify(brand.name),
      categoryId: category._id,
      createdBy: creator,
      updatedBy: creator,
    });

    await newBrand.save();

    category.brands.push(newBrand);
    await category.save();
    return newBrand;
  }catch (error) {
    throw new ApiError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      "Something went wrong",
      [categoryValidate.errorMap.HANDLE.internalServerError]
    );
  }
}

// const updateById = async (id, brand, updater) => {
//   const brandFind = await CategoryModel.findById(id);

//   if (!brandFind) {
//     throw new ApiError(StatusCodes.BAD_REQUEST, "Brand not found", [
//       brandValidate.errorMap.HANDLE.brandNotFound,
//     ]);
//   }

//   brandFind.name = brand.name;
//   brandFind.urlLogo = brand.urlLogo;
//   brandFind.updatedBy = updater;

//   try {
//     await brandFind.save();
//   } catch (error) {
//     if (error.code === ERRORS.DUPLICATE) {
//       throw new ApiError(StatusCodes.BAD_REQUEST, "Brand already exists", [
//         Object.keys(error.keyValue) === "name" ? brandValidate.errorMap.HANDLE.nameAlreadyExist : brandValidate.errorMap.HANDLE.codeAlreadyExist,
//       ]);
//     }
//     throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Something went wrong", [
//       brandValidate.errorMap.HANDLE.internalServerError,
//     ]);
//   }

//   return brandFind;
// };

const deleteById = async (id) => {
  const brandFind = await CategoryModel.findById(id);
  if (!brandFind) {
    throw new ApiError(StatusCodes.BAD_REQUEST, "Bad Request", [
      brandValidate.errorMap.HANDLE.brandNotFound,
    ]);
  }

  try {
    await brandFind.deleteOne();
    return true;
  } catch (error) {
    throw new ApiError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      "Something went wrong",
      [brandValidate.errorMap.HANDLE.internalServerError]
    );
  }
};

export const categoryService = {
  getAll,
  create,
  addBrandToCategory,
  deleteById
};
