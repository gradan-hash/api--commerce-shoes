import express from "express";

import {
  createProducts,
  getProducts,
  getsingleProduct,
} from "../controllers/products.js";
const router = express.Router();

router.post("/new", createProducts);
router.get("/allproducts", getProducts);
router.get("/single/:id", getsingleProduct);
export default router;
