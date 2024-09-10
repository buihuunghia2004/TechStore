import mongoose from "mongoose";
const { Schema } = mongoose;

const managerSchema = new Schema(
  {
    name:{
      type: String,
      required: true,
    },
    slug:{
      type:String,
      required:true
    },
    imgUrl: {
      type: String,
      required: true,
    },
    imgPId: {
      type: String,
      required: true,
    },
    categoryId:{
      type: Schema.Types.ObjectId,
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
    _destroy: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
export const BrandModel = mongoose.model("Brand", managerSchema);
