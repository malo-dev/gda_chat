import express from "express";
import getFriends from "../controllers/messagecontrollers/getFriends.js";
import sendMessage from "../controllers/messagecontrollers/sendMessage.js";
import authMiddleware from "../middlewares/authMiddleware.js";

const router = express.Router()
router.get('/get-friends', authMiddleware, getFriends)
router.post('/send-message',authMiddleware, sendMessage)
export default router