import express, { Request, Response } from "express";
import { signup, login, logout } from "../controllers/auth";

const authRouter = express.Router();

authRouter.post("/signup", signup);
authRouter.post("/login", login);
authRouter.post("/logout", logout);

export default authRouter;
