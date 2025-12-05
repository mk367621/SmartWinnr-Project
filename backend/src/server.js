import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("API running successfully...");
});

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("Connected to the MongoDB successfully..."))
  .catch((err) => console.log(`Error is : ${err}`));

app.listen(process.env.PORT, () => {
  console.log(`The server is running on port number ${process.env.PORT}`);
});
