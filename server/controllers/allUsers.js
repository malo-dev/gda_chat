import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js';
const AllUsers = asyncHandler(async (req,res) => {
	const Keyword = req.query.search ? {
		$or: [
			{name : {$regex : req.query.search,$option : "i"}},
			{ email: { $regex: req.query.search, $option: "i" } }
		]
	} : {}
	const  users =  await User.find(Keyword).find({$ne : req.user._id})
res.send(users)	
})

export default AllUsers;
