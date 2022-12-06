import MessageModel from "../../models/MessageModel.js";
const sendMessage = async (req, res) => {
	const { senderName, reseverId, message } = req.body
	
	const senderId = req.myId;
	try {
		const insertMessage = await MessageModel.create({
			senderId: senderId,
			senderName: senderName,
			reseverId: reseverId,
			message: {
				text: message,
				image :""
			}
		})
		res.status(200).json({
			success: true,
			message: {
				senderId: senderId,
				senderName: senderName,
				reseverId: reseverId,
				message:message
			}
			
		})
	} catch (error) {
		res.status(500).json({
			error : {errorMessage : "Internal server error"}
		})
	}
  
}

export default sendMessage