import express from "express";
import {
  getTotalUsers,
  getTotalOrders,
} from "../controllers/adminController.js";
import authMiddleware from "../middlewares/authMiddleware.js";
import { adminMiddleware } from "../middlewares/adminMiddleware.js";
import { getAdminMetrics } from "../controllers/getAdminMetrics.js";

export const adminRoute = express.Router();

adminRoute.get(
  "/stats/total-users",
  authMiddleware,
  adminMiddleware,
  getTotalUsers
);

adminRoute.get(
  "/stats/total-orders",
  authMiddleware,
  adminMiddleware,
  getTotalOrders
);

adminRoute.get("/metrics", authMiddleware, adminMiddleware, getAdminMetrics);
