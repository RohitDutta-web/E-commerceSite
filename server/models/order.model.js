import mongoose from "mongoose";

const orderSchema = new mongoose.Schema({
  product: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
    required: true,
  },
  customer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  seller: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Seller",
    required: true
  },
  status: {
    type: String,
    enum: ["placed", "warehouse", "out_for_delivery", "delivered", "cancelled", "delayed", "arriving early"],
    required: true,
  },
  paymentReceipt: {
    type: String,
    required: true,
    unique: true,
  }
}, { timestamps: true })

orderSchema.index({ _id: 1 })
orderSchema.index({ paymentReceipt: 1 })
orderSchema.index({ status: 1 })
orderSchema.index({customer: 1})

const Order = mongoose.model("Order", orderSchema);
export default Order;