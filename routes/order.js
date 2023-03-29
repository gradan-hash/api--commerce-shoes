import { createOrder, getOrder } from "../controllers/order.js";

import express from "express";

const router = express.Router();

router.post("/neworder", createOrder);
router.get("/getorder", getOrder);

export default router;
