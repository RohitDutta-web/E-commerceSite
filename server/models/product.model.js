import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  picture: {
    type: String
  },
  brand: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ["phone", "desktop accessories", "laptop", "smart watch", "camera", "desktop", "headphones", "gaming", "others"],
    required: true,
  }
  ,
  enlistedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Seller"
  },
  stock: {
    type: Number,
    required: true
  },
  ratings: {
    average: {
      type: Number,
      min: [0, "Rating cannot be below 0"],
      max: [5, "Rating cannot exceed 5"],
      default: 0,
    }
  },
  sold: {
    type: Number
  }
})
productSchema.index({ name: 1, category: 1 });

const Product = mongoose.model("Product", productSchema)

export default Product;