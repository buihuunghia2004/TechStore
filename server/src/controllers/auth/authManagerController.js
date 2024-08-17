import { authManagerService } from "../../services/auth/authManagerService.js";
import { SuccessRes } from "../../utils/SuccessRes.js";

const login = async (req, res, next) => {
  try {
    const result = await authManagerService.login(req.body.login, req.body.password)
    SuccessRes(res, result, "Success")
  } catch (error) {
    next(error)
  }
}

export const authManagerController = {
  login
};
