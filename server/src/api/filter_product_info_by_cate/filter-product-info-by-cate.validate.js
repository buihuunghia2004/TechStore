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
    categoryNotFound: '2404-Category not found',
    internalServerError:'230-Internal server error'
  }
}

const create = Joi.object({
  name:vc.STRING.required().messages(errorMap.VALIDATE.name),
  code:vc.STRING.required().messages(errorMap.VALIDATE.name),
})

export const filterProductInfoByCateValidate = {
  errorMap,
  create
}