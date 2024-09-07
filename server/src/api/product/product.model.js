import mongoose from "mongoose";
const { Schema } = mongoose;

const productSchema = new Schema(
  {
    code: {
      type: String,
      required: true,
      unique: true,
    },
    productName: {
      type: String,
      required: true,
    },
    deviceName:{
      type: String,
      required: true,
    },
    slug: {
      type: String
    },
    imgUrl: {
      type: String,
      required: true,
    },
    imgPId: {
      type: String,
      required: true,
    },
    images:{
      type: [Schema.Types.ObjectId],
      ref: 'ImgVersionProduct',
      default: [],
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
      default:0
    },
    quantity: {
      type: Number,
      required: true,
      default:0
    },
    default:{
      type: Boolean,
      default: false
    },
    description: {
      type: String,
      required: true,
    },
    brand: {
      type: Schema.Types.ObjectId,
      ref: "Brand",
      required: true,
    },
    category: {
      type: Schema.Types.ObjectId,
      ref: "Category",
      required: true,
    },
    filters: {
      type: [Schema.Types.ObjectId],
      ref: "Filter",
      default: [],
    },
    infos:{
      type: [Schema.Types.ObjectId],
      ref: "Info",
      default: [],
    },
    attributes: {
      type: [Schema.Types.ObjectId],
      ref: "Attribute",
      default: [],
    },
    createdBy: {
      type: String,
      required: true,
    },
    updatedBy: {
      type: String,
      required: true,
    }
  },
  { timestamps: true }
);
export const ProductModel = mongoose.model("Product", productSchema);
