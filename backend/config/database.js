import mongoose from "mongoose";
const conexionOfDb = () => {
	mongoose.connect(process.env.DB_URL)
	.then(() => {
		console.log('db is connected');
	})
	.catch((e) => {
		console.log(e);
	})
}
export default conexionOfDb