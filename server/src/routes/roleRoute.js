import express from 'express'
import { roleController } from '~/controllers/roleController'
const Router = express.Router()

Router.route('/')
 .get(roleController.findMany)

export const roleRoute = Router