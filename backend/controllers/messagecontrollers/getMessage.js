import MessageModel from "../../models/MessageModel.js";

const getMessage = async (req, res,next) => {
		const myId = req.myId;
		const fdId = req.params.id;
	try {
	let getAllMessage = await MessageModel.find({})
		getAllMessage = getAllMessage.filter(m=>m.senderId === myId && m.reseverId === fdId || (m.reseverId === myId && m.senderId === fdId))
		res.status(200).json({
			success: true, message: getAllMessage
		});
		
	} catch (error) {
		res.status(500).json({
			error: {
				errorMessage : "Interenal server side"
			}
		})
		next()
	} 
}

export default getMessage