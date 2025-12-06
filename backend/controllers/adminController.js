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
