const { ValidateConst: vc } = require("@/utils/ValidateConst")
const Joi = require("joi")

const errorMap = {
  VALIDATE:{
    name:{
      "any.required": '110-Name is required',
    },
    urlLogo:{
      "any.required": '120-UrlLogo is required',
      "string.uri": '121-UrlLogo is not valid'
    },
    code:{
      "any.required": '130-Code is required',
    },
    _destroy:{
      "any.required": '150-_destroy is required',
    }
  },
  HANDLE:{
    name:{
      "exists": '210-Name already exist',
    },
    code:{
      "exists": '220-Code already exist',
    },
    brandNotFound: '2404-Manager not found',
    internalServerError:'230-Internal server error'
  }
}

const createBrand = Joi.object({
  name:vc.STRING.required().messages(errorMap.VALIDATE.name),
  urlLogo:vc.URL.required().messages(errorMap.VALIDATE.urlLogo),
  code:vc.STRING.required().messages(errorMap.VALIDATE.code),
})

const updateBrand = Joi.object({
  name:vc.STRING.required().messages(errorMap.VALIDATE.username),
  urlLogo:vc.STRING.required().messages(errorMap.VALIDATE.email),
  _destroy:vc.BOOLEAN.required().messages(errorMap.VALIDATE._destroy),
})

export const brandValidate = {
  createBrand,
  updateBrand,
  errorMap
}