import express from 'express'
import { filterProductInfoByCateController } from './product-filter.controller'
const Router = express.Router()

Router.route('/:category')
  .get(
    filterProductInfoByCateController.getByCategory
  )

export const filterProductInfoByCateRoute = Router