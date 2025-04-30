import mongoose from "mongoose";

export const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI);
    console.log(`Connected to mongoDb:${conn.connection.host}`);
  } catch (error) {
    console.log(`Not connected to mongoDb:`, error);
  }
};
