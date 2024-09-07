import ApiError from "@/utils/ApiError";
import Pick from "@/utils/Pick";
import { StatusCodes } from "http-status-codes";

const validationMiddleware = (schemaRequest,schemaValidate = []) => {
  return async (req, res, next) => {
    try {
      console.log(req.body);
      
      req.body = Pick(req.body, schemaValidate);
      console.log(req.body);
      
      await schemaRequest.validateAsync(req.body, { abortEarly: false });
      next();
    } catch (error) {
      console.log(error);
      next(
        new ApiError(StatusCodes.BAD_REQUEST, "Validation error", error.details.map((detail) => detail.message))
      );
    }
  };
};
export default validationMiddleware;
