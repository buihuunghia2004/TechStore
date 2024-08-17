import mongoose from "mongoose";
const { Schema } = mongoose;

const managerRoleSchema = new Schema({
  managerId: {
    type: Schema.Types.ObjectId,
    ref: "Manager",
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
});

export const ManagerRole = mongoose.model("ManagerRole", managerRoleSchema);
export const ManagerRoleCollectionName = 'managerroles'