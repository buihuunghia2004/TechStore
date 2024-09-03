const { ValidateConst: vc } = require("@/utils/ValidateConst")
const Joi = require("joi")

const errorMap = {
  VALIDATE:{
    username:{
      "any.required": '110-Username is required',
    },
    email:{
      "any.required": '120-Email is required',
      "string.email": '121-Email is not valid'
    },
    password:{
      "any.required": '130-Password is required',
      "string.min": '131-Password must be at least 6 characters'
    },
    roles:{
      "any.required": '140-Roles is required',
      "any.only":"141-Invalid roles"
    },
    _destroy:{
      "any.required": '150-_destroy is required',
    }
  },
  HANDLE:{
    emailExists: '210-Email already exist',
    nameExists: '220-Username already exist',
    managerNotFound: '220-Manager not found',
    internalServerError:'230-Internal server error'
  }
}

const createManager = Joi.object({
  username:vc.STRING.required().messages(errorMap.VALIDATE.username),
  email:vc.EMAIL.required().messages(errorMap.VALIDATE.email),
  password:vc.STRING.min(6).required().messages(errorMap.VALIDATE.password),
  roles:vc.ROLES.messages(errorMap.VALIDATE.roles)
})

const updateManager = Joi.object({
  username:vc.STRING.messages(errorMap.VALIDATE.username),
  email:vc.EMAIL.messages(errorMap.VALIDATE.email),
  password:vc.STRING.min(6).messages(errorMap.VALIDATE.password),
})

const adminUpdateManager = Joi.object({
  username:vc.STRING.required().messages(errorMap.VALIDATE.username),
  email:vc.EMAIL.required().messages(errorMap.VALIDATE.email),
  password:vc.STRING.min(6).required().messages(errorMap.VALIDATE.password),
  roles:vc.ROLES.messages(errorMap.VALIDATE.roles),
  _destroy:vc.BOOLEAN.required().messages(errorMap.VALIDATE._destroy),
})

export const managerValidate = {
  createManager,
  updateManager,
  adminUpdateManager,
  errorMap
}