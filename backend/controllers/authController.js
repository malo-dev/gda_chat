import User from "../models/authModel.js";
import formidable from "formidable";
import validator from "validator";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import fs from 'fs'
import path from 'path'
import dirname  from "path";

const userRegister = async (req, res) => {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With,Content-Type, Accept");
	res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
	const form = formidable();
	form.parse(req, async  (err, fields, files) => {
		
		const { username, email, password, confirmPassword } = fields;
		
		const { image } = files
		
		const error = [];
		if (!username) {
			error.push('please provide user name')
		} if (!email) {
			error.push('please provide your mail')
		}
		if (email && !validator.isEmail(email)) {
			error.push("please provide your valid email")
		}
		if (!password) {
			error.push('please provide your password')
		}
		if (!confirmPassword) {
			error.push('please provide password')
		}
		if (password && confirmPassword && password !== confirmPassword) {
			error.push('your password and confirm password  not same')
		}
		if (password && password.length < 6) {
			error.push('please  your password must be 6 character')
		}if (!image) {
			error.push('please provide image');
		}
		
		if (error.length > 0) {
			return res.status(400).json({
				error : {errorMessage : error}
			})
		} else {
			let oldpath = files.image.filepath;
			 let newpath =  '/home/brijuth/codes/chat_gda/backend/controllers' + '/images' + '/' + files.image.originalFilename;
        		
      
       fs.rename(oldpath, newpath, function (err) {
        if (err) throw err;
		   console.log("images is uploaded")
	   });
			try {
				const checkUser = await User.findOne({ email})
				if (checkUser) {
					return res.status(404).json({
						error: {
							errorMessage : ['Your mail already exited']
						}
					})
				} else {
					const userRegister = await User.create({
						username,
						email,
						password: await bcrypt.hash(password, 10),
						image: files.image.originalFilename,
					})
	
					// if (userRegister) {
					// 	res.status(201).json(userRegister)
					// }
					const token = jwt.sign({
						id: userRegister._id,
						email: userRegister.email,
						username: userRegister.username,
						image: userRegister.image,
						registerTime : userRegister.createAt
					}, process.env.SECRET_KEY, {
						expiresIn :"30d"
					})
					
					const options = {
						expires : new Date(Date.now() + process.env.COOKIE_EXP *24*60*60*1000)
					}
					res.status(201).cookie('authToken', token, options).json({
						successMessage: "Your Register successfull",
						token : token
					})
				}
			} catch (error) {  
				res.status(404).json({
					error: {
						errorMessage : "Internal Server error"
					}
				})	
			}
		}
		res.end()
	})
}
export default userRegister