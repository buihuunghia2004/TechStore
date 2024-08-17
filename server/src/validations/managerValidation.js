import { StatusCodes } from "http-status-codes";
import ApiError from "../utils/ApiError.js";
import { ROLE } from "../utils/constants.js";
import { ValidConst as vc } from "../utils/validationConstant.js";
import Joi from "joi";

const insertOne = async (req, res, next) => {
  try {
    const correctData = Joi.object({
      email: vc.EMAIL.required(),
      username: vc.STRING.required(),
      password: vc.STRING.required(),
      roles: vc
        .ARRAY(
          vc.STRING.valid(
            ROLE.ACCOUNTING,
            ROLE.ADMIN,
            ROLE.SUPPORT,
            ROLE.PRODUCTMANAGER
          )
        )
        .required(),
    });
    await correctData.validateAsync(req.body);
    next();
  } catch (error) {
    next(new ApiError(StatusCodes.BAD_REQUEST, error.message))
  }
};

const updateById = async (req, res, next) => {
  try {
    const correctData = Joi.object({
      email: vc.EMAIL,
      username: vc.STRING,
      password: vc.STRING,
      roles: vc.ARRAY(
        vc.STRING.valid(
          ROLE.ACCOUNTING,
          ROLE.ADMIN,
          ROLE.SUPPORT,
          ROLE.PRODUCTMANAGER
        )
      ),
    });
    await correctData.validateAsync(req.body);
    next();
  } catch (error) {
    next(new ApiError(StatusCodes.BAD_REQUEST, error.message))
  }
};
export const managerValidation = {
  insertOne,
  updateById
};
