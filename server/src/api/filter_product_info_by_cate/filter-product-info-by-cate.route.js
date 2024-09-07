import express from 'express'
import { filterProductInfoByCateController } from './filter-product-info-by-cate.controller'
const Router = express.Router()

Router.route('/:category')
  .get(
    filterProductInfoByCateController.getByCategory
  )

export const filterProductInfoByCateRoute = Router