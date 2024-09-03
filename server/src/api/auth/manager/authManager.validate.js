import { ValidateConst as Validate } from "@/utils/ValidateConst"
import Joi from "joi"

const login = Joi.object({
  login: Validate.STRING.required().messages({
    "any.required": "110-Login is required",
  }),
  password: Validate.STRING.required().messages({
    "any.required": "120-Password is required",
  }),
})

export const authManagerValidate = {
  login
}