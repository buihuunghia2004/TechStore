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
    },
    brand:{
      name:{
        "any.required": '160-Name is required',
      }
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

const createCategory = Joi.object({
  name:vc.STRING.required().messages(errorMap.VALIDATE.name),
})

const updateCategory = Joi.object({
  name:vc.STRING.required().messages(errorMap.VALIDATE.username),
  _destroy:vc.BOOLEAN.required().messages(errorMap.VALIDATE._destroy),
})

const addBrandToCategory = Joi.object({
  name:vc.STRING.required().messages(errorMap.VALIDATE.brand.name),
})

export const categoryValidate = {
  errorMap,
  createCategory,
  updateCategory,
  addBrandToCategory
}