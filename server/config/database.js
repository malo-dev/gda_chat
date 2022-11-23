import mongoose from "mongoose";
const conexionOfDb = () => {
	mongoose.connect("mongodb+srv://malochat:malochat37700@cluster0.dysk2py.mongodb.net/chatpart")
	.then(() => {
		console.log('db is connected');
	})
	.catch((e) => {
		console.log(e);
	})
}
export default conexionOfDb