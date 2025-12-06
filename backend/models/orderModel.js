import mongoose from "mongoose";
const schema = mongoose.Schema;

const orderSchema = new schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    products: [
      {
        name: { type: String, required: true },
        quantity: { type: Number, required: true },
      },
    ],
    amount: { type: Number, required: true },
    status: { type: String, default: "pending" },
  },
  { timestamps: true }
);

export const orderModel = mongoose.model("order", orderSchema);
