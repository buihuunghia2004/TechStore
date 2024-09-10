import express from "express";
import { categoryController } from "./category.controller";
import upload from "@/middlewares/upload";
import authorizeRoles from "@/middlewares/authMiddleware";
import { ROLE } from "@/utils/Constants";
import validationMiddleware from "@/middlewares/validationMiddleware";
import { brandValidate } from "../brand/brand.validate";
import brandDTO from "../brand/brand.dto";
import { brandController } from "../brand/brand.controller";
import { categoryValidate } from "./category.validate";
import categoryDTO from "./category.dto";
import { productInfoValidate } from "../product_info/product-info.validate";
import productInfoByCateDTO from "../product_info/proudct-info.dto";
import { productInfoByCateController } from "../product_info/product-info.controller";
import { filterProductInfoByCateController } from "../filter_product_info_by_cate/filter-product-info-by-cate.controller";
import { filterProductInfoByCateValidate } from "../filter_product_info_by_cate/filter-product-info-by-cate.validate";
import filterProductInfoByCateDTO from "../filter_product_info_by_cate/filter-product-info-by-cate.dto";
const Router = express.Router();

Router.route("/")
  .get(categoryController.getAll)
  .post(
    authorizeRoles([ROLE.ADMIN]),
    upload.single("image"),
    validationMiddleware(
      categoryValidate.createCategory,
      categoryDTO.query.create
    ),
    categoryController.create
  );
Router.route("/:id").delete(
  authorizeRoles([ROLE.ADMIN]),
  categoryController.deleteById
);
Router.route("/:slug/brands")
  .get(authorizeRoles([ROLE.ADMIN]), brandController.getBrandsByCateSlug)
  .post(
    authorizeRoles([ROLE.ADMIN]),
    upload.single("image"),
    validationMiddleware(brandValidate.createBrand, brandDTO.query.create),
    brandController.createBrand
  );

Router.route("/:slug/filter-product-infos")
  .post(
  authorizeRoles([ROLE.ADMIN]),
  validationMiddleware(
    filterProductInfoByCateValidate.create,
    filterProductInfoByCateDTO.query.create
  ),
  filterProductInfoByCateController.create
  );

Router.route("/:slug/product-infos")
  .post(
    authorizeRoles([ROLE.ADMIN]),
    validationMiddleware(
      productInfoValidate.create,
      productInfoByCateDTO.query.create
    ),
    productInfoByCateController.create
  )
  .get(

  )

export const categoryRoute = Router;
