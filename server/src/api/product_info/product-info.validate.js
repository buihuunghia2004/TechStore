const { ValidateConst: vc } = require("@/utils/ValidateConst");
const Joi = require("joi");

const validateErrors = {
  name: {
    "any.required": "110-Name is required",
  },
  code: {
    "any.required": "120-Code is required",
  },
};

export const productInfoErrors = {
  name: {
    exists: "210-Name already exist",
  },
  code: {
    exists: "220-Code already exist",
  },
  create: {
    notFoundCate: "3404-Category not found",
    productInfoExists: "1101-Prodct info already exists",
  },
  productInfoNotFound: "404-Product info not found",
  internalServerError: "230-Internal server error",
};

const create = Joi.object({
  name: vc.STRING.required().messages(validateErrors.name),
  code: vc.STRING.required().messages(validateErrors.name),
});

export const productInfoValidate = {
  create,
};