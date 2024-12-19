import mongoose from "mongoose";


const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true
  },
  price: {
    type: Number,
    required: true,
    min: 0
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
    enum: ["phone", "desktop accessories" , "laptop" , "smart watch" , "camera" , "PC" , "headphones", "others"],
    required: true,
  }
  ,
  createdBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref:"User"
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
  },
  count: {
    type: Number,
    default: 0,
  },
}
})
productSchema.index({ name: 1, category: 1 });

const Product = mongoose.model("Product", productSchema)

export default Product;