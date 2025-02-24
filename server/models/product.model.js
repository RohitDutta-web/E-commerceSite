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
  discount: {
    type: Number,
    default: 0,
  },
  afterDiscountAmt: {
    type: Number
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

productSchema.pre("save", function (next) {
  if (this.price && this.discount !== undefined) {
    const price = Number(this.price);
    const discount = Number(this.discount);

    this.afterDiscountAmt = Math.round(price - (price * discount) / 100);
  }
  next();
});

const Product = mongoose.model("Product", productSchema)

export default Product;