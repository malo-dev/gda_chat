import jwt from 'jsonwebtoken'
const generateToken = (id) => {
	return jwt.sign({id}, "malo", {
		expiresIn : "30d"
	})
}
export default generateToken
