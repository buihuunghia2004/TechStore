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
import { productFilterController } from "../product_filter/product-filter.controller";
import { productFilterValidate } from "../product_filter/product-filter.validate";
import { productInfoController } from "../product_info/product-info.controller";
import productFilterDTO from "../product_filter/product-filter.dto";
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

Router.route("/:slug/product-filters")
  .post(
    authorizeRoles([ROLE.ADMIN]),
    validationMiddleware(
      productFilterValidate.create,
      productFilterDTO.query.create
    ),
    productFilterController.create
  )
  .get(
    productFilterController.getByCategory
  )

Router.route("/:slug/product-filters/:id")
  .delete(
    productFilterController.deleteById
  )

Router.route("/:slug/product-infos")
  .post(
    authorizeRoles([ROLE.ADMIN]),
    validationMiddleware(
      productInfoValidate.create,
      productInfoByCateDTO.query.create
    ),
    productInfoController.create
  )
  .get(
    productInfoController.getByCategory
  );

Router.route("/:slug/product-infos/:id")
  .delete(
    productInfoController.deleteById
  )

export const categoryRoute = Router;
