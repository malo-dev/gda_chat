import mongoose from "mongoose";
const messageSchema = mongoose.Schema({
	senderId: {
		type: String,
		required : true,
	},
	senderName: {
		type: String,
		required : true,
	},
	reseverId: {
		type: String,
		required : true,
	},
	message: {
		text: {
			type: String,
		},
		image: {
			type: String,
			default : ""
		}
	},
},
{timestamp : true})
export default mongoose.model('message',messageSchema)