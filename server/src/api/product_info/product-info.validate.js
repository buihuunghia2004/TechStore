const { ValidateConst: vc } = require("@/utils/ValidateConst")
const Joi = require("joi")

const errorMap = {
  VALIDATE:{
    name:{
      "any.required": '110-Name is required',
    },
    code:{
      "any.required": '120-Code is required',
    }
  },
  HANDLE:{
    name:{
      "exists": '210-Name already exist',
    },
    code:{
      "exists": '220-Code already exist',
    },
    create:{
      notFoundCate: '3404-Category not found',
      productInfoExists: '1101-Prodct info already exists'
    },
    productInfoNotFound: '404-Product info not found',
    internalServerError:'230-Internal server error'
  }
}

const create = Joi.object({
  name:vc.STRING.required().messages(errorMap.VALIDATE.name),
  code:vc.STRING.required().messages(errorMap.VALIDATE.name),
})

export const productInfoValidate = {
  errorMap,
  create,
  handleErrors:errorMap.HANDLE
}