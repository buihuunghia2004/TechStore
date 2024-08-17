import express from 'express'
import { authManagerController } from '../controllers/auth/authManagerController.js'
const Router = express.Router()

Router.route('/management/login')
 .post(authManagerController.login)

export const authRoute = Router