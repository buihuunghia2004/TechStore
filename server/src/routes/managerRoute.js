import express from "express";
import { managerController } from "~/controllers/managerController";
const Router = express.Router();

Router.route("/")
  .get(managerController.findMany)
  .post(managerController.create);

export const managerRoute = Router;
