import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI!;

if (!MONGODB_URI) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let isConnected = false;

async function connectDB() {
  if (isConnected) {
    return mongoose;
  }

  await mongoose.connect(MONGODB_URI, {
    bufferCommands: false,
  });
  isConnected = true;
  return mongoose;
}

export default connectDB; 