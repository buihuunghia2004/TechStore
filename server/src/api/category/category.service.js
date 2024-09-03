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
  only = { password: 0 },
  sorts = {},
} = {}) => {
  const query = CategoryModel.find({}, only).populate("brands");

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
      urlImage: uploadedFile.secure_url,
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

// const deleteById = async (id) => {
//   const brandFind = await CategoryModel.findById(id);
//   if (!brandFind) {
//     throw new ApiError(StatusCodes.BAD_REQUEST, "Bad Request", [
//       brandValidate.errorMap.HANDLE.brandNotFound,
//     ]);
//   }

//   try {
//     await brandFind.deleteOne();
//     return true;
//   } catch (error) {
//     throw new ApiError(
//       StatusCodes.INTERNAL_SERVER_ERROR,
//       "Something went wrong",
//       [brandValidate.errorMap.HANDLE.internalServerError]
//     );
//   }
// };

export const categoryService = {
  getAll,
  create,
};
