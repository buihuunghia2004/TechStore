import express from 'express'
import { roleController } from '../controllers/roleController.js'
const Router = express.Router()

Router.route('/')
 .get(roleController.findMany)

export const roleRoute = Router