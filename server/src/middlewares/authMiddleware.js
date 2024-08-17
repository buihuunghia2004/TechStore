import { StatusCodes } from "http-status-codes";
import { env } from "../config/environment.js";
import { jwtHelper } from "../helpers/jwtHelper.js";
import ApiError from "../utils/ApiError.js";

const authenticateToken = async (req, res, next) => {
  // Lấy token được gửi lên từ phía client, thông thường tốt nhất là các bạn nên truyền token vào header
  const tokenFromClient = req.headers["authorization"]?.split(" ")[1];

  if (tokenFromClient) {
    // Nếu tồn tại token
    try {
      // Thực hiện giải mã token xem có hợp lệ hay không?
      const decoded = await jwtHelper.verifyToken(
        tokenFromClient,
        env.ACCESS_TOKEN_SECRET
      );
      // Nếu token hợp lệ, lưu thông tin giải mã được vào đối tượng req, dùng cho các xử lý ở phía sau.
      req.account = decoded.data;
      // Cho phép req đi tiếp sang controller.      
      next();
    } catch (error) {
      // Nếu giải mã gặp lỗi: Không đúng, hết hạn...etc:
      return res.status(401).json({
        message: "Unauthorized.",
      });
    }
  } else {
    // Không tìm thấy token trong request
    return res.status(403).send({
      message: "No token provided.",
    });
  }
};

const authorizeRoles = (roles) => {  
  return (req, res, next) => {        
    if (!roles.some((role) => req.account.roles.includes(role))) {
      next(new ApiError(StatusCodes.FORBIDDEN, "Forbidden"));
    }
    next();
  };
};

export { authenticateToken, authorizeRoles };
