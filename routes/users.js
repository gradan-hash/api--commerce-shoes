import express from "express";
import { checkUser, createUser, getAllUsers } from "../controllers/users.js";

const router = express.Router();

router.post("/register", createUser);
router.post("/login", checkUser);
router.get("/allusers", getAllUsers);
export default router;
