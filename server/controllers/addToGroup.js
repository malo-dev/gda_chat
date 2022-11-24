import asyncHandler from 'express-async-handler'
import Chat from '../models/chatModel.js'

const addToGroup = asyncHandler(async (req,res) => {
	const { chatId, userId } = req.body
	const addded = await Chat.findByIdAndUpdate(
		chatId,
		{$push : {users:userId}},
		{new:true}
	)
		.populate("users", "-password")
		.populate("groupAdmin", "password")
	if (!addded) {
		res.status(404)
		throw new Error(erro.message)
	} else {
		res.json(addded);
	}
})
export default addToGroup