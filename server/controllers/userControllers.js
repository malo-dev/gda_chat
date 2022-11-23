import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js';
import generateToken from '../utils/generateToken.js';
import bcrypt from 'bcrypt'
 const registerUser = asyncHandler(async (req, res) => {
	
	const { name, email, password } = req.body
	if(!name || !email || !password){
		res.status(400);
		throw new Error("Please fullfilled all the field")
	}
	const salt = await bcrypt.genSalt(10)
	const hash = await bcrypt.hash(req.body.password, salt)
	
	const userExist = await User.findOne({email})
	if (userExist) {
		res.status(400);
		throw new Error("User already exists")
	}
	const user = await User.create({
		name,
		email,
		password : hash
	
	})

	if (user) {
		res.status(201).json({
			_id: user._id,
			name: user.name,
			email: user.email,
			pic: user.pic,
			token : generateToken(user._id)
		})
	} else {
		res.status(400);
		throw new Error("Failed to create the user")
	}
})

export default registerUser