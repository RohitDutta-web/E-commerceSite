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
  address: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Address",
  }],
  profile: {
    type: String,
    enum: ["customer", "merchant", "admin"],
    required: true,

  },
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  }],
  wishList: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product"
  }],
  boughtItems: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product"
  }],
  soldItems: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product"
  }]
}, { timestamps: true })

userSchema.index({ email: 1 });

const User = mongoose.model("User", userSchema)
export default User