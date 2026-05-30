import express from 'express';
const app = express()
import dotenv from 'dotenv'
import connection from './config/db.js';
dotenv.config()

const PORT = process.env.PORT

connection()

app.listen(PORT,()=>{
    console.log(`server running on port ${PORT}`);
    
})