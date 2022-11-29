import mongoose from "mongoose";
const registerSchema = mongoose.Schema({
	username: {
		type: String,
		required : true
	},
	email: {
		type: String,
		required : true
	},
	password: {
		type: String,
		required : true
	},
	image: {
		type: String,
		required: true
	}
},
	{ timestamps: true }
)

const user = mongoose.model('user', registerSchema)

export default user