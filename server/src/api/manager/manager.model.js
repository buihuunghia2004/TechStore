import { ROLE } from "@/utils/Constants";
import mongoose from "mongoose";
const { Schema } = mongoose;

const managerSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    createdBy: {
      type: String,
      required: true,
    },
    updatedBy: {
      type: String,
      required: true,
    },
    roles: {
      type: [String],
      required: true,
      enum: [ROLE.ACCOUNTING, ROLE.ADMIN, ROLE.SUPPORT, ROLE.PRODUCTMANAGER],
    }
  },
  { timestamps: true }
);
export const ManagerModel = mongoose.model("Manager", managerSchema);
