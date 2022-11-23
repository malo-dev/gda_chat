import asyncHandler from 'express-async-handler'
import Chat from '../models/chatModel.js'

const renameGroup = asyncHandler(async (req,res) => {
	const { chatId, chatName } = req.body
	const updateChat = await Chat.findByIdAndUpdate(
		chatId,
		{ chatName: chatName },
		{new: true}
	)
		.populate("users", "-password")
		.populate("groupAdmin", "-password")
	if (!updateChat) {
		res.status(404);
		throw new Error("Chat not found")
	} else {
		res.json(updateChat)
}
})
export default renameGroup