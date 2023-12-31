import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const localDB = process.env.LOCAL_DB;
const atlasDB = String(process.env.LOCAL_DB);
const connectDB = async () => {
  try {
    await mongoose.connect(atlasDB);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Failed to connect to MongoDB:", error);
  }
};

export default connectDB;
