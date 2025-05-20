import express, { Request, Response } from "express";
import { signup } from "../controllers/auth";


const authRouter = express.Router();


authRouter.post("/signup", signup);

export default authRouter;
