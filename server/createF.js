const fs = require("fs");
const path = require("path");

// // Lấy các tham số dòng lệnh
const args = process.argv.slice(2);
const entity = process.argv.slice(3);
console.log(entity);
const name = args[0]; // Tên thư mục

// // Kiểm tra nếu đủ tham số
if (!name) {
  console.log("Vui lòng cung cấp tên thư mục, tên file và nội dung file!");
  process.exit(1);
}
//Method
const upperFirst = (value) => {
  return value.charAt(0).toUpperCase() + value.slice(1);
};
const contentModel = (name) => {
  let content = `import mongoose from "mongoose"
const { Schema } = mongoose

const ${name}Schema = new Schema({\n${entity.map((item) => {
    return `${item}:{
      type: String,
      required: true
    }\n`;
  })}})

export const ${upperFirst(name)} = mongoose.model('${upperFirst(
    name
  )}', ${name}Schema)`;
  return content;
};
//Content
const contentValidate = (name) => {
  let content = `const Joi = require("joi")
import { validConst as vc } from "../utils/validConst.js"

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

export const ${name}Validation = {
}`;
  return content;
};
const contentController = (name) => {
  let content = `import { PageRequest } from '../utils/PageRequest.js'
import { SuccessRes } from '../utils/SuccessRes.js'
import { ${name}Service } from '../services/${name}Service.js'

const findById = async (req, res, next) => {
  const { id } = req.params
  try {
    const result = await ${name}Service.findById(id)
    SuccessRes(res, result, "Success")
  } catch (error) {
    next(error)
  }
}

const findOne = async (req, res, next) => {
  const { id } = req.params
  try {
    const result = await ${name}Service.findOne(id)
    SuccessRes(res, result, "Success")
  } catch (error) {
    next(error)
  }
}

const findMany = async (req, res, next) => {
  const pageRequest = PageRequest({
    isPagination: req.query.isPagination,
    page: req.query.page,
    size: req.query.size,
    sort: req.query.sort
  })
  try {
    const result = await ${name}Service.findMany({pageRequest})
    SuccessRes(res, result, "Success")
  } catch (error) {
    next(error)
  }
}

const insertOne = async (req, res, next) => {
  try {
    const result = await ${name}Service.insertOne(req.body)
    SuccessRes(res, result, "Success")
  } catch (error) {
    next(error)
  }
}

const updateById = async (req, res, next) => {
  const { id } = req.params
  try {
    const result = await ${name}Service.updateById(id, req.body)
    SuccessRes(res, result, "Success")
  } catch (error) {
    next(error)
  }
}

const deleteById = async (req, res, next) => {
  const { id } = req.params
  try {
    const result = await ${name}Service.deleteById(id)
    SuccessRes(res, result, "Success")
  } catch (error) {
    next(error)
  }
}
export const ${name}Controller ={
  findById,
  findOne,
  findMany,
  insertOne,
  updateById,
  deleteById
}`;
  return content;
};
const contentService = (name) => {
  let content = `import { ${upperFirst(name)} } from "../models/${name}Model.js";
const findById = async (id,options) => {
    const {populate=[], projection={} } = options || {}
    const result = await ${upperFirst(name)}.findById(id,projection)
    .populate(populate)
    .exec()
    return result
}
const findOne = async (options) => {
    const {filter = {},populate=[], projection={}} = options || {}
    const result = await ${upperFirst(name)}.findOne(filter,projection)
    .populate(populate)
    .exec()
    return result
}
const findMany = async (options) => {
  const {
    filter = {},
    populate = [],
    projection = {},
    pageRequest,
  } = options || {};  
  let query = ${upperFirst(name)}.find(filter, projection).populate(populate);
  if (pageRequest.sort) {
    query = query.sort(pageRequest.sort);
  }
  if (pageRequest.isPagination) {
    query = query.skip(pageRequest.skip).limit(pageRequest.limit);
  }
  return ${upperFirst(name)}DTO.fromEntities(await query.exec());
}
const insertOne = async (data) => {
  const ${name} = new ${upperFirst(name)}(data);
  return await ${name}.save();
}
const updateById = async (id, data) => {
  return await ${upperFirst(name)}.findByIdAndUpdate(id, data, { new: true });
}
const deleteById = async (id) => {
  return await ${upperFirst(name)}.findByIdAndDelete(id);
}

export const ${name}Service ={
    findById,
    findOne,
    findMany,
    insertOne,
    updateById,
    deleteById
}`;
  return content;
};
const contentRoute = (name) => {
  let content = `import express from 'express'
const Router = express.Router()

Router.route('/')
 .post()

export const ${name}Route = Router`;
  return content;
};
const createFile = (folderName, fileName, fileContent) => {
  // Đường dẫn đến thư mục
  const folderPath = path.join(__dirname, folderName);

  // Kiểm tra nếu thư mục tồn tại, nếu không thì tạo nó
  fs.mkdir(folderPath, { recursive: true }, (err) => {
    if (err) throw err;

    // Đường dẫn đến file
    const filePath = path.join(folderPath, fileName);

    // Tạo và ghi dữ liệu vào file
    fs.writeFile(filePath, fileContent, (err) => {
      if (err) throw err;
      console.log(
        `File ${fileName} đã được tạo trong thư mục ${folderName} với nội dung: ${fileContent}`
      );
    });
  });
};

createFile("src/models", `${name}Model.js`, contentModel(name));
createFile("src/validations", `${name}Validation.js`, contentValidate(name));
createFile(`src/controllers`, `${name}Controller.js`, contentController(name));
createFile(`src/services`, `${name}Service.js`, contentService(name));
createFile(`src/routes`, `${name}Route.js`, contentRoute(name));
