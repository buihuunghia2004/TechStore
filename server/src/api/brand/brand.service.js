import ApiError from "@/utils/ApiError";
import { StatusCodes } from "http-status-codes";
import { brandValidate } from "./brand.validate";
import { BrandModel } from "./brand.model";
import { ERRORS } from "@/utils/Constants";
import { CategoryModel } from "../category/category.model";
import slugify from "@/utils/slugify";

const getBrandsByCateSlug = async (cateSlug) => {
  return await CategoryModel
    .findOne({slug:cateSlug},{brands:1})
    .populate('brands')
};

const create = async ( cateSlug, brand, creator) => {
  //find category by slug
  const category = await CategoryModel.findOne({slug:cateSlug},{brands:1});
  if (!category) {
    throw new ApiError(StatusCodes.BAD_REQUEST, "Bad request", [
      brandValidate.handleError.create.notFoundCate
    ]);
  }

  try {
    //handle upload image
    // const uploadedFile = await cloudinary.uploader.upload(brand.imagePath, {
    //   folder: "brands",
    //   public_id: slugify(brand.name),
    //   overwrite: true,
    // });
    // fs.unlinkSync(brand.imagePath);

    //create new brand and save
    const newBrand = new BrandModel({
      name: brand.name,
      slug: slugify(brand.name),
      // imgUrl: uploadedFile.secure_url,
      // imgPId: uploadedFile.public_id,
      imgUrl: "",
      imgPId: "",
      categoryId: cateId,
      createdBy: creator,
      updatedBy: creator,
    });
    await newBrand.save();

    // add brand to category and save
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
  try {
    const brand = await BrandModel.findByIdAndDelete(id);

  if (!brand) {
    throw new ApiError(StatusCodes.BAD_REQUEST, "Brand not found", [  
      brandValidate.errorMap.HANDLE.brandNotFound,
    ]);
  }

  return true;
  }catch(error){
    throw new ApiError(StatusCodes.INTERNAL_SERVER_ERROR, "Something went wrong", [
      brandValidate.errorMap.HANDLE.internalServerError,
    ]);
  }
};

const brandService = {
  getBrandsByCateSlug,
  create,
  deleteById,
  updateById
};

export default brandService;
