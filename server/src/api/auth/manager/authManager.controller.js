import { SuccessRes } from "@/utils/SuccessRes";
import { authManagerService } from "./authManager.service";

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
