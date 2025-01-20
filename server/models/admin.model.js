import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  companyId: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true
  },
  profile: {
    type: String,
    required: true,
    default: "admin",
  }

}, { timestamps: true })

adminSchema.index({ email: 1 })
adminSchema.index({companyId: 1 })

const Admin = mongoose.model("Admin", adminSchema)

export default Admin;