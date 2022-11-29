import user from "../models/authModel.js";
import formidable from "formidable";
import validator from "validator";
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import fs from 'fs'
import  path  from 'path'

const userRegister = async (req,res) => {
	const form = formidable();
	form.parse(req, (err, fields, files) => {
		
		const { username, email, password, confirmPassword } = fields;
		
		const { image } = files
		console.log(image)
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
		}if (image) {
			console.log(Object.keys(files).length);
		}
		if (error.length > 0) {
			res.status(400).json({
				error : {errorMessage : error}
			})
		} else {
			console.log(files.profilePic)
			var oldPath = files.profilePic.path;
        	var newPath = path.join(__dirname, '../../../client/public/image')
                + '/'+files.profilePic.name
        		var rawData = fs.readFileSync(oldPath)
      
        fs.writeFile(newPath, rawData, function(err){
            if(err) console.log(err)
            return res.send("Successfully uploaded")
        })
			
			// const getImageName = image.originalFilename
			// const randNumber = Math.floor(Math.random() * 99999)
			// const newImageName = randNumber + getImageName
			// files.image.originalFilename = newImageName
			// const newPath = dirname + `../../../client/public/image/${files.image.originalFilename
			// 	}`;
			try {
				// const checkUser = await user.findOne({ email : email})
				// if (checkUser) {
				// 	res.status(404).json({
				// 		error: {
				// 		errorMessage : ['Your email already exited'] 
				// 	}
				// 	})
				// } else {
					// fs.copyFile("files.image.path", newPath, async (error) => {
					// 	if (!error) {
					// 	const userRegister = await user.create({
					// 		username,
					// 		email,
					// 		password: await bcrypt.hash(password,10),
					// 		image : files.image.originalFilename
							
					// 	})
					// 		res.status(200).json(userRegister)
					// 		const token = jwt.sign({
					// 				id: userRegister._id,
					// 				email: userRegister.email,
					// 				username: userRegister.username,
					// 				image: userRegister.image,
					// 				registerTime : userRegister.createAt
					// 			},process.env.SECRET_KEY, {
					// 				expiresIn:"30d"
					// 			})
					// 	}
					// })
					
				// }
			} catch (error) {
				console.log(error)	
			}
		}
		res.end()
	})
}
export default userRegister