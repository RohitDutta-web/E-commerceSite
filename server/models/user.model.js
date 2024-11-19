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
    type: Number,
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
    enum: ["customer", "seller"],
    required: true,

  },
  products: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product",
  }]
}, { timestamps: true })

const User = mongoose.model("User", userSchema)
export default User