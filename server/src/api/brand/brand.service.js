import ApiError from "@/utils/ApiError";
import { StatusCodes } from "http-status-codes";
import { brandValidate } from "./brand.validate";
import { BrandModel } from "./brand.model";
import { ERRORS } from "@/utils/Constants";
import { CategoryModel } from "../category/category.model";
import slugify from "@/utils/slugify";

const getAll = async ({
  isPagination = false,
  limit = 0,
  skip = 0,
  only = { password: 0 }, 
  sorts = {},
} = {}) => {
  const query = BrandModel.find({}, only);

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
    BrandModel.countDocuments(),
  ]);

  return [result, total];
};

const getByCode = async (code,only) => {
  console.log(only);
  
  const brand = await BrandModel.findOne({ code: code },only);
  if (!brand) {
    throw new ApiError(StatusCodes.BAD_REQUEST, "Brand not found", [
      brandValidate.errorMap.HANDLE.brandNotFound,
    ])
  }
  return brand
}


const create = async ( categoryId, brand, creator) => {  
  const brandFind = await BrandModel.findOne({$and : [{name: brand.name}, {categoryId: categoryId}]});
  if (brandFind) {//lỗi đã tồn tại
    throw new ApiError(StatusCodes.BAD_REQUEST, "Category not found", [
      categoryValidate.errorMap.HANDLE.categoryNotFound,
    ]);
  }
  
  try {
    const uploadedFile = await cloudinary.uploader.upload(brand.imagePath, {
      folder: "brands",
      public_id: slugify(brand.name),
      overwrite: true,
    });
    fs.unlinkSync(brand.imagePath);

    const newBrand = new BrandModel({
      name: brand.name,
      imgUrl: uploadedFile.secure_url,
      imgPId: uploadedFile.public_id,
      slug: slugify(brand.name),
      categoryId: categoryId,
      createdBy: creator,
      updatedBy: creator,
    });

    await newBrand.save();

    category.brands.push(newBrand._id);
    await category.save();
    return newBrand;
  }catch (error) {
    console.log(error);
    
    throw new ApiError(
      StatusCodes.INTERNAL_SERVER_ERROR,
      "Something went wrong",
      [brandValidate.errorMap.HANDLE.internalServerError]
    );
  }
}

const updateById = async (id, brand, updater) => {
  const brandFind = await BrandModel.findById(id);

  if (!brandFind) {
    throw new ApiError(StatusCodes.BAD_REQUEST, "Brand not found", [
      brandValidate.errorMap.HANDLE.brandNotFound,
    ]);
  }

  brandFind.name = brand.name;
  brandFind.urlLogo = brand.urlLogo;
  brandFind.updatedBy = updater;

  try {
    await brandFind.save();
  } catch (error) {
    if (error.code === ERRORS.DUPLICATE) {
      throw new ApiError(StatusCodes.BAD_REQUEST, "Brand already exists", [
        Object.keys(error.keyValue) === "name" ? brandValidate.errorMap.HANDLE.nameAlreadyExist : brandValidate.errorMap.HANDLE.codeAlreadyExist,
      ]);
    }
    throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Something went wrong", [
      brandValidate.errorMap.HANDLE.internalServerError,
    ]);
  }

  return brandFind;
};

const deleteById = async (id) => {
  const brandFind = await BrandModel.findById(id);
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

const brandService = {
  getAll,
  getByCode,
  create,
  updateById,
  deleteById,
};

export default brandService;
