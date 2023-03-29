import express from "express";
import { checkUser, createUser } from "../controllers/users.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/login", checkUser);
export default router;
