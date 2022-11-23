import express from 'express'
import registerUser from '../controllers/userControllers.js'
import loginUser from '../controllers/userlogincontrollers.js'
const router = express.Router()

router.route('/register').post(registerUser).get(allUsers)
router.route('/login').post(loginUser)
router.route('')
export default router