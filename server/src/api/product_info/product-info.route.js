import express from 'express'
import { productInfoByCateController } from './product-info.controller'
const Router = express.Router()

Router.route('/:category')
  .get(                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
    productInfoByCateController.getByCategory
  )

export const productInfoByCateRoute = Router