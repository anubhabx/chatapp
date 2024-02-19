import mongoose from "mongoose";
import * as dotenv from "dotenv";

dotenv.config();

// Connect to MongoDB
export default async function connectToDB() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB", error);
  }
}
