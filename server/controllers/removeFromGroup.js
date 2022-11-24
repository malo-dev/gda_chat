import asyncHandler from 'express-async-handler'
import Chat from '../models/chatModel.js'

const removeFromGroup = asyncHandler(async (req,res) => {
	const { chatId, userId } = req.body
	const deleted = await Chat.findByIdAndUpdate(
		chatId,
		{$pull : {users:userId}},
		{new:true}
	)
		.populate("users", "-password")
		.populate("groupAdmin", "password")
	if (!addded) {
		res.status(404)
		throw new Error(erro.message)
	} else {
		res.json(deleted);
	}
})
export default removeFromGroup