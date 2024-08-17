import express from 'express'
import { categoryController } from '../controllers/categoryController.js'
const Router = express.Router()

Router.route('/')
 .get(categoryController.findMany)

export const categoryRoute = Router