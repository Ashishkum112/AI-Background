import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDB from './config/mongodb.js';
import userRouter from './routes/userRoute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// Connect to Database
await connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Use raw body parser for Clerk webhook route
app.use('/api/user/webhooks', bodyParser.raw({ type: 'application/json' }));

// API Routes
app.get('/', (req, res) => res.send("API Working"));
app.use('/api/user', userRouter); 

// Start Server
app.listen(PORT, () => console.log('Server Running on port ' + PORT));
