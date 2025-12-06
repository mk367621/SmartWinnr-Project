import { orderModel } from "../models/orderModel.js";

export const createOrder = async (req, res) => {
  try {
    const { products, amount } = req.body;
    if (!products || !Array.isArray(products) || products.length === 0) {
      return res.status(400).json({ message: "Products are required" });
    }
    if (!amount) {
      return res.status(400).json({ message: "Amount is required" });
    }
    const order = await orderModel.create({
      user: req.user._id,
      products,
      amount,
      status: "completed",
    });
    return res.status(201).json({
      message: "Order created successfully",
      order,
    });
  } catch (error) {
    console.log("Create Order Error:", error);
    return res.status(500).json({ message: "Server error", error });
  }
};

export const getMyOrders = async (req, res) => {
  try {
    const orders = await orderModel.find({ user: req.user._id });

    return res.status(200).json({
      message: "User orders fetched successfully",
      orders,
    });
  } catch (error) {
    console.log("Get My Orders Error:", error);
    return res.status(500).json({ message: "Server error", error });
  }
};
