import mongoose from "mongoose";
const { Schema } = mongoose;

const managerSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
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
export const ManagerRelationships= {
  roles: [
    {
      $lookup: {
        from: 'managerroles',
        localField: "_id",
        foreignField: "managerId",
        as: 'managerroles',
      },
    },
    {
      $lookup: {
        from: 'roles',
        localField: "managerroles.role",
        foreignField: "name",
        as: 'roles',
      }
    }
  ],
};
export const Manager = mongoose.model("Manager", managerSchema);
