import mongoose from "mongoose";

const ProductsShema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    img: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    size: {
      type: [String],
      required: true,
    },
    type: {
      type: String,
    },
    category:{
      type:String,
    }
  },
  { timestamps: true }
);

export default mongoose.model("Products", ProductsShema);
