import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); 

const url = process.env.URL;

const connectDB = async () => {
  try {
    await mongoose.connect(url);
    console.log('Successfully connected to the database');
  } catch (error) {
    console.error(error);
  }
};

export default connectDB;
