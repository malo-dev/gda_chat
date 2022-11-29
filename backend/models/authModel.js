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

const User = mongoose.model('User', registerSchema)

export default User