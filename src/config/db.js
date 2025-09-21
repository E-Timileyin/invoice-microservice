import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config(); // load .env

const connectDB = async () => {
  try {
    console.log("Mongo URI:", process.env.MONGO_URI); // debug log
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error", err);
    process.exit(1);
  }
};

export default connectDB;
