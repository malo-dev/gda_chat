import express from 'express'
import accessChat from '../controllers/accessChat.js';
import fetchChats from '../controllers/fetchChats.js';
import protect from '../middlewares/authMiddler.js';
const router = express.Router();
router.route('/').post(protect, accessChat)
router.route('/').get(protect, fetchChats)
// router.route("/group").post(protect, createGroupChat)
// router.route("/rename").put(protect, renameGroup)
// router.route("/groupremove").put(protect,removeFromGroup)
// router.route("/groupadd").put(protect,addToGroup)
export default router