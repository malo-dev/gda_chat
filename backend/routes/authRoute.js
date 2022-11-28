import express from "express";
import userRegister from "../controllers/authController.js";

const router = express.Router()
router.post('/user-register',userRegister)
export default router