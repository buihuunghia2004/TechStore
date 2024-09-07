import authorizeRoles from '@/middlewares/authMiddleware'
import express from 'express'
import validationMiddleware from '@/middlewares/validationMiddleware'
import { ROLE } from '@/utils/Constants'
import { brandValidate } from './brand.validate'
import brandDTO from './brand.dto'
import { brandController } from './brand.controller'
const Router = express.Router()

Router.route('/')
  .get(
    brandController.getBrands
  )
 .post(
    authorizeRoles([ROLE.ADMIN]),
    validationMiddleware(brandValidate.createBrand,brandDTO.query.create),
    brandController.createBrand
  )
Router.route('/:id')
  .delete(
    authorizeRoles([ROLE.ADMIN]),
    brandController.deleteById
  )
export const brandRoute = Router