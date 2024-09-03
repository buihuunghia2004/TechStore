import mongoose from "mongoose";
const { Schema } = mongoose;

const managerSchema = new Schema(
  {
    name:{
      type: String,
      required: true,
    },
    urlLogo: {
      type: String,
      required: true,
    },
    code: {
      type: String,
      required: true,
      unique: true,
    },
    createdBy: {
      type: String,
      required: true,
    },
    updatedBy: {
      type: String,
      required: true,
    },
    _destroy: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
export const BrandModel = mongoose.model("Brand", managerSchema);
