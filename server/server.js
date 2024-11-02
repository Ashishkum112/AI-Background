import express from 'express'
import cors from 'cors'
import connectDB from './config/mongodb.js';
import dotenv from 'dotenv';
import userRouter from './routes/userRoute.js';
dotenv.config();



//App Congig
const PORT = process.env.PORT || 4000  
const app = express();
await connectDB();

//API Route
app.get('/',(req,res)=>{res.send("API Working")})
app.use('/api/user',userRouter)


//Initialise MiddleWare
app.use(express.json());
app.use(cors())


app.listen(PORT,()=>console.log('Server Running on port '+PORT));