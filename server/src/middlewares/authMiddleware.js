import { StatusCodes } from "http-status-codes";
import { env } from "../config/environment.js";
import { jwtHelper } from "../helpers/jwtHelper.js";
import ApiError from "../utils/ApiError.js";

const authorizeRoles = (roles) => {
  return async (req, res, next) => {
    const tokenFromClient = req.headers["authorization"]?.split(" ")[1];

    if (tokenFromClient) {
      try {
        const decoded = await jwtHelper.verifyToken(
          tokenFromClient,
          env.ACCESS_TOKEN_SECRET
        );
        
        if (!roles.some((role) => decoded.data.roles.includes(role))) {
          next(new ApiError(StatusCodes.FORBIDDEN, "Forbidden"));
        }

        req.account = decoded.data;
        
        next();
      } catch (error) {
        next(new ApiError(StatusCodes.UNAUTHORIZED, "Unauthorized"));
      }
    } else {
      next(new ApiError(StatusCodes.FORBIDDEN, "Forbidden"));
    }
  };
};

export default authorizeRoles;
