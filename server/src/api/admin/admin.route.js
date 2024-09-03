import authorizeRoles from '@/middlewares/authMiddleware'
import { ROLE } from '@/utils/Constants'
import express from 'express'
import validationMiddleware from '@/middlewares/validationMiddleware'
import { managerValidate } from '../manager/manager.validate'
import { managerController } from '../manager/manager.controller'
import managerDTO from '../manager/manager.dto'
const Router = express.Router()

Router.route('/managers')
 .post(
   authorizeRoles([ROLE.ADMIN]),
   validationMiddleware(managerValidate.createManager,managerDTO.query.create),
   managerController.createManager  
  )

Router.route('/managers/:id')
 .patch(
    authorizeRoles([ROLE.ADMIN]),
    validationMiddleware(managerValidate.adminUpdateManager),
    managerController.updateManager
 )  

export const adminRoute = Router