import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';
import bcrypt from 'bcrypt'

const loginUser = asyncHandler(async (req, res) => {
	const { email, password } = req.body
	console.log(req.body)
	
	const user = await User.findOne({ email })
 if (user) {
		const validity = await bcrypt.compare(password, user.password)
		if (!validity) {
			res.status(400)
			throw new Error("Password is wrong")
		}
		res.status(201).json({
			_id: user._id,
			name: user.name,
			email: user.email,
			pic: user.pic,
			token : generateToken(user._id)
		})
	}
})
export default loginUser