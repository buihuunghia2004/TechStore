import { ValidateConst as Validate } from "@/utils/ValidateConst"
import Joi from "joi"

const login = Joi.object({
  login: Validate.STRING.required(),
  password: Validate.STRING.required(),
})

export const authManagerValidate = {
  login
}