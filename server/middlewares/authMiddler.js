import asyncHandler from 'express-async-handler'
import User from '../models/userModel.js';
import Jwt  from 'jsonwebtoken';
const protect = asyncHandler(async (req, res, next) => {
  let token;

  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
	  try {
      token = req.headers.authorization.split(" ")[1];
      
		const decoded = Jwt.verify(token, process.env.JWTKEY);
      req.user = await User.findById(decoded.id).select("-password");

      next();
    } catch (error) {
		  res.status(401);
		  console.log({ msg: error.message, stack: error.stack})
		  throw new Error({ msg: error.message, stack: error.stack});
    }
  }

  if (!token) {
    res.status(401);
    throw new Error("Not authorized, no token");
  }
});
export default protect
