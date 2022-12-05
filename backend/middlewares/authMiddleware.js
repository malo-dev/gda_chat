
import Jwt  from "jsonwebtoken";
const authMiddleware = async (req, res, next) => {
	const { authToken } = req.cookies;
	if (authToken) {
		const deCodeToken = await Jwt.verify(authToken, process.env.SECRET_KEY)
		req.myId = deCodeToken.id;
		next()
	} else {
		res.status(400).json({ error: { errorMessage: ['please go to signup first '] } })
		next()
	}
	
}

export default authMiddleware