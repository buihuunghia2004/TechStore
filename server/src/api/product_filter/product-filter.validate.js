const { ValidateConst: vc } = require("@/utils/ValidateConst")
const Joi = require("joi")

const validateErrors = {
    name:{
      "any.required": '110-Name is required',
    },
    code:{
      "any.required": '120-Code is required',
    }
  }

export const productFilterHandleErrors =   {
    name:{
      "exists": '210-Name already exist',
    },
    code:{
      "exists": '220-Code already exist',
    },
    create:{
      categoryNotFound: '3404-Category not found',
      filterExists: '11000-Filter allready exists'
    },
    internalServerError:'230-Internal server error'
  }

const create = Joi.object({
  name:vc.STRING.required().messages(validateErrors.name),
  code:vc.STRING.required().messages(validateErrors.code),
})

export const productFilterValidate = {
  create
}