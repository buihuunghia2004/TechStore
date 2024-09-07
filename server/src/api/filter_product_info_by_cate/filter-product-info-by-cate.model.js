import mongoose from "mongoose";
const { Schema } = mongoose;

const schema = new Schema(
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
    },
    filters: {
      type: [Schema.Types.ObjectId],
      ref: "Filter",
      default: [],
    },
  },
  { timestamps: true }
);
export const FilterProductInfoCateModel = mongoose.model("FilterInfoByCate", schema);
