import express from "express";
import userRegister from "../controllers/authController.js";
import userLogin from "../controllers/loginControllers.js";

const router = express.Router()
router.post('/user-register', userRegister)
router.post('/user-login',userLogin)
export default router