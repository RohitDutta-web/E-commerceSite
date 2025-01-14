import mongoose from "mongoose";

const sellerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  storeName: {
    type: String,
    required : true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required:true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  area: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  state: {
    type: String,
    required: true
  },
  zipCode: {
    type: Number,
    required: true
  },
  country: {
    type: String,
    required: true
  },
  listedItems: [{
    type: mongoose.Schema.Types.ObjectId,
    ref:"Product"
  }],
  profile: {
    type: String,
    required: true,
    default: "seller"
  }, 
  soldItems: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: "Product"
  }]
}, { timestamps: true })


sellerSchema.index({ email: 1 })

const Seller = mongoose.model( "Seller",sellerSchema)

export default Seller;