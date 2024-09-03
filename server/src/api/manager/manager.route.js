import authorizeRoles from '@/middlewares/authMiddleware'
import { ROLE } from '@/utils/Constants'
import express from 'express'
import { managerController } from './manager.controller'
import validationMiddleware from '@/middlewares/validationMiddleware'
import { managerValidate } from './manager.validate'
import managerDTO from './manager.dto'
const Router = express.Router()

Router.route('/')
  .get(
    managerController.getManagers
  )
 .post(
   authorizeRoles([ROLE.ADMIN]),
   validationMiddleware(managerValidate.createManager,managerDTO.query.create),
   managerController.createManager  
  )

Router.route('/:id')
 .patch(
    authorizeRoles([ROLE.ADMIN]),
    validationMiddleware(managerValidate.updateManager,managerDTO.query.manager_update),
    managerController.updateManager
 )
 .delete(
    authorizeRoles([ROLE.ADMIN]),
    managerController.deleteManager
 )

export const managerRoute = Router