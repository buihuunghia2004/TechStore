import mongoose from "mongoose";
const { Schema } = mongoose;

const model = new Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
    },
    name: {
      type: String,
      required: true,
      unique: true,
    },
    categoryId: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    }
  },
  { timestamps: true }
);
export const ProductInfoCateModel = mongoose.model("ProductInfoByCate", model);
