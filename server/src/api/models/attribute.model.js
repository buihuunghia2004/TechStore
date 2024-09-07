import mongoose from "mongoose";
const { Schema } = mongoose;

const schema = new Schema(
  {
    code:{
      type: String,
      required: true,
    },
    value:{
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
export const AttributeModel = mongoose.model("Attribute", schema);
