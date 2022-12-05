import express from "express";
import userRegister from "../controllers/authController.js";
import userLogin from "../controllers/loginControllers.js";
import authMiddleware from "../middlewares/authMiddleware.js";
const router = express.Router()
router.post('/user-register', userRegister)
router.post('/user-login',authMiddleware,userLogin)
export default router