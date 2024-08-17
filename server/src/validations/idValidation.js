import { StatusCodes } from "http-status-codes";
import ApiError from "../utils/ApiError.js";
import { ValidConst } from "../utils/validationConstant.js";

const idValidation = async (req, res, next) => {
  const idCorrect = ValidConst.OBJECT_ID;
  try {
    await idCorrect.validateAsync(req.params.id);
    next();
  } catch (error) {
    next(new ApiError(StatusCodes.NOT_FOUND,'Id not found'));
  }
};

export default idValidation;
