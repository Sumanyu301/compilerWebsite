import express, { Request, Response } from "express";
import { signup, login } from "../controllers/auth";

const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);

export default authRouter;
