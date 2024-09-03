const { ValidateConst: vc } = require("@/utils/ValidateConst")
const Joi = require("joi")

const errorMap = {
  VALIDATE:{
    name:{
      "any.required": '110-Name is required',
    },
    urlImage:{
      "any.required": '120-Url image is required',
      "string.uri": '121-Url image is not valid'
    },
    slug:{
      "any.required": '130-Slug is required',
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

const createCategory = Joi.object({
  name:vc.STRING.required().messages(errorMap.VALIDATE.name),
  urlImage:vc.URL.required().messages(errorMap.VALIDATE.urlImage)
})

const updateCategory = Joi.object({
  name:vc.STRING.required().messages(errorMap.VALIDATE.username),
  urlImage:vc.STRING.required().messages(errorMap.VALIDATE.urlImage),
  _destroy:vc.BOOLEAN.required().messages(errorMap.VALIDATE._destroy),
})

export const categoryValidate = {
  errorMap,
  createCategory,
  updateCategory
}