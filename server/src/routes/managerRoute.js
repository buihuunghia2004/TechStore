import express from "express";
import { managerController as controller } from "../controllers/managerController.js";
import {
  authenticateToken,
  authorizeRoles,
} from "../middlewares/authMiddleware.js";
import { ROLE } from "../utils/constants.js";
import { managerValidation as validation } from "../validations/managerValidation.js";
import idValidation from "../validations/idValidation.js";
const Router = express.Router();

Router.route("/")
  .get(controller.findMany)
  .post(
    authenticateToken,
    authorizeRoles([ROLE.ADMIN]),
    validation.insertOne,
    controller.insertOne
  );

Router.route("/:id")
  .get(
    authenticateToken,
    authorizeRoles([
      ROLE.ADMIN,
      ROLE.PRODUCTMANAGER,
      ROLE.SUPPORT,
      ROLE.ACCOUNTING,
    ]),
    idValidation,
    controller.findById
  )
  .patch(
    authenticateToken,
    authorizeRoles([ROLE.ADMIN]),
    idValidation,
    validation.updateById,
    controller.updateById
  )
  .delete(
    authenticateToken,
    authorizeRoles([ROLE.ADMIN]),
    idValidation,
    controller.deleteById
  );

export const managerRoute = Router;
