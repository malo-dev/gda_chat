import express from "express";
import getFriends from "../controllers/messagecontrollers/getFriends.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router()
router.get('/get-friends',authMiddleware, getFriends)
export default router