import Seller from "../models/seller.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

export const registerSeller = async (req, res) => {
  try {
    const { name, storeName, phoneNumber, password, email, area, city, state, zipCode, country, profile } = req.body;
    if (!name || !storeName || !phoneNumber || !password || !email || !area || !city || !state || !zipCode || !profile || !country) {
      return res.status(400).json({
        message: "Missing credentials",
        success: false
      })
    }

    const existingSeller = await Seller.findOne({ email })
    if (existingSeller) {
      return res.status(400).json({
        message: "Seller already exist"
      })
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt)


    await Seller.create({
      name,
      storeName,
      phoneNumber,
      password : hashedPassword,
      email,
      area,
      city,
      state,
      zipCode,
      country,
      profile
    })


    return res.status(200).json({
      message: "Seller account created",
      success : true
    })


   } catch (err) {
    return res.status(500).json({
      message: "Internal server issue",
      success: false
    })
  }
}


export const logInSeller = async (res, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "missing credentials",
        success: false
      })
    }


    const seller = await Seller.findOne({ email })

    if (!seller) {
      return res.status(400).json({
        message: "Invalid seller ",
        success: false
      })
    }

    const comparePassword = await bcrypt.compare(password, seller.password)
    if (!comparePassword) return res.status(400).json({
      message: "Invalid credentials",
      success: false
    })

    const tokenData = {
      _id :seller._id,
    }


   } catch (e) {
    return res.status(500).json({
      message: "internal server issue",
      success: false
    })
  }
}