import { userModel } from "../models/userModel.js";
import { orderModel } from "../models/orderModel.js";

export const getTotalUsers = async (req, res) => {
  try {
    const count = await userModel.countDocuments();
    return res.status(200).json({
      message: "Total users count fetched successfully",
      totalUsers: count,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error",
      error,
    });
  }
};

export const getTotalOrders = async (req, res) => {
  try {
    const count = await orderModel.countDocuments();
    return res.status(200).json({
      message: "total orders count fetched successfully...",
      totalOrders: count,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Server error",
      error,
    });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    const users = await userModel.find({}, { password: 0 });

    return res.status(200).json({
      message: "Users fetched successfully",
      users,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to fetch users",
      error: error.message,
    });
  }
};

export const getAllOrders = async (req, res) => {
  try {
    const orders = await orderModel.find().populate("user", "email name");

    res.json({
      success: true,
      orders,
    });
  } catch (err) {
    console.error("GET ORDERS ERROR:", err);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
