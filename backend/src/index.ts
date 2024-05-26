import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from './routes/userRoutes';
import hiredRoutes from './routes/hiredRoutes';
import statusRoutes from './routes/statusRoutes';

dotenv.config();


const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

app.use('/users', userRoutes);
app.use('/employees', hiredRoutes);
app.use('/statuses', statusRoutes);

// MongoDB connection
mongoose.connect(process.env.MONGO_URI!)
.then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('MongoDB connection error:', error);
});

// Start the server
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// npm start to run