import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true
  },
  address: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Address"
  },
  profile: {
    type: String,
    required: true,
    default: "customer"
  },
  wishList: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product"
  }],
  boughtItems: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product"
  }],
  cart:[{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product"
  }],
  orders: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Order"
  }]
}, { timestamps: true })

userSchema.index({ email: 1 });

const User = mongoose.model("User", userSchema)
export default User