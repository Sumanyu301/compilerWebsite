import express from "express";
import { Request, Response } from "express";
import mongoose from "mongoose";
import { z } from "zod";
import User from "../models/authModel";
import bcrypt from "bcrypt";


const signupSchema = z.object({
  username: z.string().min(5),
  email: z.string().email(),
  password: z.string().min(6),
});

export const signup = async (req: Request, res: Response): Promise<void> => {
  const { email, username, password } = req.body;

  const result = signupSchema.safeParse({
    email,
    username,
    password,
  });

  if (!result.success) {
    res.status(400).json({
      success: false,
      errors: result.error.errors,
    });
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = new User({
    username,
    email,
    password: hashedPassword,
  });

  await user.save;

  res.status(200).json({
    success: true,
    message: "Validation successful",
  });
};
