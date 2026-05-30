import express from 'express';
const app = express()
import dotenv from 'dotenv'
import connection from './config/db.js';
import userRoutes from './routes/userRoutes.js'
import cors from 'cors'
dotenv.config()

const PORT = process.env.PORT

connection()
app.use(cors())
app.use(express.json());

app.use('/user',userRoutes)

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
    
})