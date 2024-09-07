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
    filterInfoCateId: {
      type: Schema.Types.ObjectId,
      ref: "FilterInfoCate",
      required: true,
    }
  },
  { timestamps: true }
);
export const FilterModel = mongoose.model("Filter", schema);
