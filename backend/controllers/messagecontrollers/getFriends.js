import User from "../../models/authModel.js"
const getFriends = async (req, res) => {
	const myId = req.myId
	try {
		const friendGet = await User.find({})
		// res.status(200).json({ success: true, friends: friendGet })
		const filter = friendGet.filter(d => d.id !== myId);
		res.status(200).json({success : true, friends : filter})
	} catch (error) {
		res.status(500).json({ error: { errorMessage : 'Internal server error' } })
	}
}
export default getFriends