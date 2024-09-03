import express from 'express'
import { categoryController } from './category.controller'
import upload from '@/middlewares/upload'
import authorizeRoles from '@/middlewares/authMiddleware'
import { ROLE } from '@/utils/Constants'
const Router = express.Router()

Router.route('/')
  .get(
    categoryController.getAll
  )
  .post(
    authorizeRoles([ROLE.ADMIN]),
    upload.single('image'),
    categoryController.create
  )

Router.route('/:code')
  .get(
  )
  .patch(
  )
  .delete(
  )

export const categoryRoute = Router