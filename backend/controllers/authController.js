import { userModel } from "../models/userModel.js";
import bcrypt from "bcrypt";
import { generateToken } from "../utils/jwt.js";

export const registerController = async (req, res) => {
  try {
    const { name, email, password, role } = req.body;
    if (!name || !email || !password) {
      return res
        .status(400)
        .json({ message: "name, email and password are required" });
    }
    const existingUser = await userModel.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "user already exists..." });
    }
    const hashed = await bcrypt.hash(password, 10);
    const user = await userModel.create({
      name,
      email,
      password: hashed,
      role: "viewer",
    });
    return res.status(201).json({
      message: "user created successfully...",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: error,
    });
  }
};

export const loginController = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "enter your email and password to continue..." });
    }

    const user = await userModel.findOne({ email });
    if (!user) {
      return res.status(400).json({
        message: "Invalid credentials...",
      });
    }
    const passwordIsMatched = await bcrypt.compare(password, user.password);
    if (!passwordIsMatched) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = generateToken(user);
    return res.status(200).json({
      message: "Login successful",
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
      token,
    });
  } catch (error) {
    console.error("loginController:", error);
    return res
      .status(500)
      .json({ message: "Server error", error: error.message });
  }
};
