import express from 'express'
import AllUsers from '../controllers/allUsers.js'

import registerUser from '../controllers/userControllers.js'
import loginUser from '../controllers/userlogincontrollers.js'
import protect from '../middlewares/authMiddler.js'
const router = express.Router()

router.route('/register').post(registerUser)
router.route('/login').post(loginUser)
router.route('/').get(protect,AllUsers)
export default router