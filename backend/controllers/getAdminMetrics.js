import { userModel } from "../models/userModel.js";
import { orderModel } from "../models/orderModel.js";

export const getAdminMetrics = async (req, res) => {
  try {
    const totalUsers = await userModel.countDocuments();
    const totalOrders = await orderModel.countDocuments();

    const salesData = await orderModel.aggregate([
      { $group: { _id: null, totalSales: { $sum: "$amount" } } }
    ]);

    const totalSales = salesData[0]?.totalSales || 0;

    return res.status(200).json({
      message: "Admin metrics fetched successfully",
      metrics: {
        totalUsers,
        totalOrders,
        totalSales
      }
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching metrics",
      error
    });
  }
};

