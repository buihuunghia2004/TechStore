import mongoose from "mongoose";
const { Schema } = mongoose;

const imageVersionProduct = new Schema(
  {
    imgUrl:{
      type: String,
      required: true,
    },
    imgPId:{
      type: String,
      required: true,
    },
    productId:{
      type: Schema.Types.ObjectId,
      ref: "Product",
      required: true,
    }
  }
);
export const ImgVersionProductModel = mongoose.model("ImageProduct", imageVersionProduct);
