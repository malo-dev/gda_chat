import User from "../models/authModel.js";
import formidable from "formidable";
import validator from "validator";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'

const userLogin = async (req,res) => {
	const error = [];
	const { email, password } = req.body
	if (!email) {
		error.push("Please provide your email")
	}
	if (!password) {
		error.push("Please provide your password")
	}
	if (email && !validator.isEmail(email)) {
		error.push("please provide your valid email")
	}
	if (error.length > 0) {
		res.status(400).json({
			error: {
				errorMessage : error
			}
		})
	} else {
		try {
			const checkUser = await User.findOne({ email }).select('+password');
			if (checkUser) {
				const matchPassword = await bcrypt.compare(password, checkUser.password)
				if (matchPassword) {
					const token = jwt.sign({
					id: checkUser._id,
					email: checkUser.email,
					username: checkUser.username,
					image: checkUser.image,
					registerTime: checkUser.createAt
				}, process.env.SECRET_KEY, {
					expiresIn: "30d"
					})
					const options = {
						expires: new Date(Date.now() + process.env.COOKIE_EXP * 24 * 60 * 60 * 1000)
					}
					res.status(201).cookie('authToken', token, options).json({
					successMessage: "Your login successfull",
						token: token
					})
					res.status(200).json({ successMessage: "your login successfull" })
				} else {
					res.status(400).json({ error: { errorMessage: ["your password is wrong"] } })
				}
			} else {
				res.status(400).json({
					error : {errorMessage : ["your mail not found"]}
				})
			}
			
		} catch (error) {
			res.status(404).json({
					error : {errorMessage : ["internal server error"]}
				})
		}
	}
	res.end()
}
export default userLogin