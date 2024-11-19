import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/db.js";
dotenv.config({})

const app = express();
app.use(cors());
app.use(express.json());



const port = process.env.PORT;
app.listen(port, () => {
  console.log("Server is running!");
  connectDb();
})