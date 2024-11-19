import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config({})

const uri = process.env.MONGO_URI

const connectDb = async () => {
  try {
    await mongoose.connect(uri)
    console.log("Database connected");
    
  } catch (err) {
    console.log(err);
    
 }
}


export default connectDb;