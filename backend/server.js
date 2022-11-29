import express from 'express'
import dotenv from 'dotenv'
import conexionOfDb from './config/database.js'
import authRouter from './routes/authRoute.js'
import cookieParser from 'cookie-parser'
import bodyParser from 'body-parser'
dotenv.config()
conexionOfDb()
const app = express()
app.use('/api/messenger', authRouter)
app.use(cookieParser())
app.use(bodyParser.urlencoded())
app.use(bodyParser.json())

const PORT = process.env.PORT || 8000

app.listen(PORT, () => {
	console.log(`http://localhost:${PORT}`);
})
