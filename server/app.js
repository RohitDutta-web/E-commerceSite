import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/db.js";
import morgan from "morgan";
import helmet from "helmet";
import router from "./routes/user.routes.js";

dotenv.config({})

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());


app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});


app.use(router);

const port = process.env.PORT || 8000;
app.listen(port, () => {
  console.log("Server is running!");
  connectDb();
})