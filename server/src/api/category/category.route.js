import express from 'express'
import { categoryController } from './category.controller'
import upload from '@/middlewares/uploadMiddleware'
const Router = express.Router()

Router.route('/')
  .get(
    categoryController.getAll
  )
  .post(
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