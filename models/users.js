import mongoose from "mongoose";

const UsersSchema = new mongoose.Schema(
  {
    username: {
      type: "string",
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    isadmin: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Users", UsersSchema);
