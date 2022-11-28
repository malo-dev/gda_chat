import express from 'express'
import dotenv from 'dotenv'
import conexionOfDb from './config/database.js'
import authRouter from './routes/authRoute.js'
dotenv.config()
conexionOfDb()
const app = express()
app.use('/api/messenger', authRouter)
const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
	console.log(`http://localhost:${PORT}`);
})