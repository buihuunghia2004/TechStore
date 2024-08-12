const Joi = require("joi")
import { validConst as vc } from "~/utils/validConst"

const validate = async (req, res, next) => {
  const correct = Joi.object({
  })

  try {
    await correct.validateAsync(req.body)
    next()
  } catch (error) {
    next(error)
  }
}

export const managerRoleValidation = {
}