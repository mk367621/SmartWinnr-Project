import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import { userRoute } from "../routes/userRoutes.js";
import { adminRoute } from "../routes/adminRoutes.js";
import { orderRoute } from "../routes/orderRoutes.js";
dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use("/api/user", userRoute);
app.use("/api/admin", adminRoute);
app.use("/api/orders", orderRoute);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to the MongoDB successfully..."))
  .catch((err) => console.log(`Error is : ${err}`));

app.listen(process.env.PORT, () => {
  console.log(`The server is running on port number ${process.env.PORT}`);
});
