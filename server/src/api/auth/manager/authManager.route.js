import express from 'express'
import { authManagerController } from './authManager.controller'
import validationMiddleware from '@/middlewares/validationMiddleware'
import { authManagerValidate } from './authManager.validate'
import authManagerDTO from './auth-manager.dto'
const Router = express.Router()

Router.route('/login')
 .post(
    validationMiddleware(authManagerValidate.login, authManagerDTO.query.login),
    authManagerController.login
  )

export const authManagerRoute = Router