import Joi from "joi"
import { ROLES as roles } from "./Constants"
const OBJECT_ID_RULE = /^[0-9a-fA-F]{24}$/
const PHONENUMER_REGEX = /^[0-9]{10,11}$/


const STRING = Joi.string()
const NUMBER = Joi.number()
const BOOLEAN = Joi.boolean()

const OBJECT_ID = STRING.pattern(OBJECT_ID_RULE)
const PHONENUMBER = STRING.pattern(PHONENUMER_REGEX)
const EMAIL = STRING.email()
const URL = STRING.uri()

const ROLES = Joi.array().items(Joi.string().valid(...Object.values(roles)))
const ARRAY = (object) => {
  return Joi.array().items(object)
}

export const ValidateConst = {
  STRING, NUMBER, BOOLEAN, ARRAY,
  OBJECT_ID, PHONENUMBER, EMAIL, URL, ROLES
}