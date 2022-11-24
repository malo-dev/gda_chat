import express from 'express'
import accessChat from '../controllers/accessChat.js';
import addToGroup from '../controllers/addToGroup.js';
import createGroupChat from '../controllers/createGroupChat.js';
import fetchChats from '../controllers/fetchChats.js';
import removeFromGroup from '../controllers/removeFromGroup.js';
import renameGroup from '../controllers/renameGroup.js';
import protect from '../middlewares/authMiddler.js';
const router = express.Router();
router.route('/').post(protect, accessChat)
router.route('/').get(protect, fetchChats)
router.route("/group").post(protect, createGroupChat)
router.route("/rename").put(protect, renameGroup)
router.route("/groupremove").put(protect,removeFromGroup)
router.route("/groupadd").put(protect, addToGroup)
 
export default router