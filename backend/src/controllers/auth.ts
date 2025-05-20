import express from "express";
import { Request, Response } from "express";
import mongoose from "mongoose";
import { z } from "zod";
import User from "../models/authModel";
import bcrypt from "bcrypt";
import { generateToken } from "../lib/utils";

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
  const existingUser = await User.findOne({ email });
  if (existingUser) {
    res.status(409).json({
      success: false,
      message: "Email already registered",
    });
    return;
  }

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const user = new User({
    username,
    email,
    password: hashedPassword,
  });

  if (user) {
    const token = generateToken(user._id, res);
    await user.save();

    res.status(200).json({
      success: true,
      message: "Validation successful",
      user,
      token,
    });
  } else {
    res.status(500).json({
      message: "unsuccessful",
    });
  }
};

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});

export const login = async (req: Request, res: Response): Promise<void> => {
  const { email, password } = req.body;

  const result = loginSchema.safeParse({
    email,
    password,
  });

  if (!result.success) {
    res.status(400).json({
      success: false,
      errors: result.error.errors,
    });
    return;
  }

  try {
    // Find user by email
    const user = await User.findOne({ email });

    if (!user) {
      res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
      return;
    }

    // Compare password
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      res.status(401).json({
        success: false,
        message: "Invalid email or password",
      });
      return;
    }

    // Generate JWT token
    const token = generateToken(user._id, res);

    res.status(200).json({
      success: true,
      message: "Login successful",
      user: {
        _id: user._id,
        username: user.username,
        email: user.email,
      },
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Login failed",
    });
  }
};

export const logout = (req: Request, res: Response): void => {
  res.cookie("jwt", "", {
    httpOnly: true,
    expires: new Date(0), // This will make the cookie expire immediately
    secure: process.env.NODE_ENV === "production",
    sameSite: process.env.NODE_ENV === "production" ? "none" : "lax",
    path: "/",
  });

  res.status(200).json({
    success: true,
    message: "Logged out successfully",
  });
};
