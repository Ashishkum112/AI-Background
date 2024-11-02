import express from 'express'
import cors from 'cors'
import connectDB from './config/mongodb.js';
import dotenv from 'dotenv';
dotenv.config();



//App Congig
const PORT = process.env.PORT || 4000  
const app = express();
await connectDB();

//API Route
app.get('/',(req,res)=>{
    res.send("API Working")
})
//Initialise MiddleWare
app.use(express.json());
app.use(cors())


app.listen(PORT,()=>console.log('Server Running on port '+PORT));