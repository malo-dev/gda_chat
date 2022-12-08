import express from "express";
import getFriends from "../controllers/messagecontrollers/getFriends.js";
import getMessage from "../controllers/messagecontrollers/getMessage.js";
import imagemMessageSend from "../controllers/messagecontrollers/imagemMessageSend.js";
import sendMessage from "../controllers/messagecontrollers/sendMessage.js";
import authMiddleware from "../middlewares/authMiddleware.js";


const router = express.Router();
router.get('/get-friends', authMiddleware, getFriends);
router.get('/get-message/:id', authMiddleware, getMessage);
router.post('/send-message', authMiddleware, sendMessage);
router.post('/image-message-send', authMiddleware, imagemMessageSend); 
export default router