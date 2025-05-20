//this is goona have a functoion to create a jwt its gonna take an id and an user email i suppose or their name

import jwt from "jsonwebtoken";
import { Response } from "express";
import mongoose from "mongoose";

export const generateToken = (
  userId: mongoose.Types.ObjectId,
  res: Response
) => {
  const token = jwt.sign({ id: userId }, process.env.JWT_SECRET!, {
    expiresIn: "7d",
  });

  const isProduction = process.env.NODE_ENV === "production";

  res.cookie("jwt", token, {
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
    httpOnly: true,
    sameSite: isProduction ? "none" : "lax", //Lax is one of three possible values for the sameSite cookie attribute default in modern browsers
    secure: isProduction,
    path: "/",
  });

  return token;
};
