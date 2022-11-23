import express from 'express'
import cors from 'cors'
// import notFound from './middlewares/authError.js'
// import errorHandler from './middlewares/authError.js'
import dotenv from 'dotenv'
import userRoutes from './routes/userRoutes.js'
import conexionOfDb from './config/database.js'
conexionOfDb()
dotenv.config()

const app = express()
app.use(cors())
app.use(express.json())
app.use('/auth', userRoutes)
app.use('/api/chat',chatRoutes)
const PORT = process.env.PORT || 8080
app.listen(PORT, () => {
	console.log(`your app is turning on port http://localhost:${PORT}`)
})
