import mongoose from "mongoose";
const { Schema } = mongoose;

const roleSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
});

export const Role = mongoose.model("Role", roleSchema);
export const RoleCollectionName = 'roles'