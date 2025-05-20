import express from "express";
import dotenv from "dotenv";
import cookieParser from 'cookie-parser';

dotenv.config();

const app = express();
const port = 3000;
import authRouter from "./routes/authRoutes";
import { connectDb } from "./lib/db";

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1", authRouter);

app.listen(port, () => {
  connectDb();
  console.log(`Server is running on port ${port}`);
});
