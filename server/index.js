import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import chatRoutes from './routes/chatRoutes.js'
import conexionOfDb from './config/database.js'
const app = express()
conexionOfDb()
dotenv.config()


app.use(cors())
app.use(express.json())

app.use('/auth', userRoutes)
app.use('/api/chat', chatRoutes)

const PORT = process.env.PORT || 5000
app.listen(PORT, () => {
	console.log(`your app is turning on port http://localhost:${PORT}`)
})
