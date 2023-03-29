import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
    },
    totalAmount: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Order", OrderSchema);
