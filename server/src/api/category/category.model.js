import mongoose from "mongoose";
const { Schema } = mongoose;

const categorySchema = new Schema(
  {
    name:{
      type: String,
      required: true,
      unique: true,
    },
    slug: {
      type: String,
      required: true,
      unique: true,
    },
    imgUrl: { 
      type: String,
      required: true,
    },
    imgPId:{
      type: String,
      required: true,
      default:''
    },
    brands: {
      type:[Schema.Types.ObjectId],
      ref: 'Brand',
      default: [],
    },
    productFilters:{
      type: [Schema.Types.ObjectId],
      ref: 'ProductFilter',
      default: [],
    },
    productInfos:{
      type: [Schema.Types.ObjectId],
      ref: 'ProductInfo',
      default: [],
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
export const CategoryModel = mongoose.model("Category", categorySchema);
