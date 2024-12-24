import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDb from "./config/db.js";
import morgan from "morgan";
import helmet from "helmet";
import userRouter from "./routes/user.routes.js";
import cookieParser from "cookie-parser";
import addressRouter from "./routes/address.routes.js";
import productRouter from "./routes/products.routes.js";
import EventEmitter  from "events";

dotenv.config({})
const emitter = new EventEmitter();

emitter.setMaxListeners(20);

const app = express();
app.use(cors());
app.use(express.json());
app.use(morgan("dev"));
app.use(helmet());
app.use(cookieParser());

app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});


app.use("/api/user", userRouter);
app.use("/api/address", addressRouter);
app.use("/api/product", productRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log("Server is running!");
  connectDb();
});