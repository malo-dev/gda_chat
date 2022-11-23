import jwt from 'jsonwebtoken'
const generateToken = (id) => {
	return jwt.sign({id}, process.JWT.KEY, {
		expiresIn : "30d"
	})
}
export default generateToken
