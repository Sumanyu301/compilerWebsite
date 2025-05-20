import express from "express";
const app = express();
const port = 3000;
import authRouter from "./routes/authRoutes";
app.use(express.json());

app.use("/api/v1", authRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
