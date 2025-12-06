import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import {
  loginController,
  registerController,
} from "../controllers/authController.js";

export const userRoute = express.Router();

userRoute.post("/signup", registerController);

userRoute.post("/signin", loginController);

userRoute.get("/profile", authMiddleware, (req, res) => {
  return res.status(200).json({
    message: "Profile fetched successfully",
    user: req.user,
  });
});
