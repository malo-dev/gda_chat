import asyncHandler from 'express-async-handler'
import Chat from '../models/chatModel.js';
import User from '../models/userModel.js';

const createGroupChat = asyncHandler(async (req,res) => {
	if (!req.body.users || !req.body.name) {
		return res.status(400).send({message : "Please Fill all the fields"})
	}
	let users = JSON.parse(req.body.users)
	if (users.lenght < 2) {
		return res.status(400)
		.send("More than 2 users are required")
	}
	users.push(req.user);
	try {
		const groupChat = await Chat.create({
			chatName: req.body.name,
			users: users,
			isGroupChat: true,
			groupAdmin : req.user
		})
		const fullGroupChat = await Chat.findOne({
				_id: groupChat._id
			}).populate("users",
				"-password")
			.populate("groupAdmin",
				"-password");
		res.status(200).json(fullGroupChat)
	} catch (error) {
		res.status(400)
		throw new Error(error.message)
	}
	 
})
export default createGroupChat