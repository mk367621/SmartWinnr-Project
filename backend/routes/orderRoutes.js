import express from "express";
import authMiddleware from "../middlewares/authMiddleware.js";
import { createOrder, getMyOrders } from "../controllers/orderController.js";

export const orderRoute = express.Router();

orderRoute.post("/create", authMiddleware, createOrder);

orderRoute.get("/my-orders", authMiddleware, getMyOrders);
