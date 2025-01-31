import Seller from "../models/seller.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({})

export const registerSeller = async (req, res) => { //registering seller
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
      password: hashedPassword,
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
      success: true
    })


  } catch (err) {
    return res.status(500).json({
      message: "Internal server issue",
      success: false
    })
  }
}


export const logInSeller = async (req, res) => { //seller login
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        message: "missing credentials",
        success: false
      })
    }


    let seller = await Seller.findOne({ email })

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
      id: seller._id
    }

    const token = jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: "1d" })

    seller = {
      _id: seller._id,
      name: seller.name,
      email: seller.email,
      phoneNumber: seller.phoneNumber,
      storeName: seller.storeName,
      area: seller.area,
      city: seller.city,
      state: seller.state,
      zipCode: seller.zipCode,
      country: seller.country,
      profile: seller.profile
    }

    return res.status(200).cookie("token", token, {
      maxAge: 1 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: false,
      sameSite: 'lax',

    }).json({
      message: "login successful",
      token,
      seller,
      success: true
    })

  } catch (e) {
    return res.status(500).json({
      message: "internal server issue",
      success: false
    })
  }
}


export const updateSeller = async (req, res) => {
  try {
    const { name, storeName, phoneNumber, password, email, area, city, state, zipCode, country } = req.body


    const seller = await Seller.findById(req.seller.id)


    if (!seller) {
      return res.status(400).json({
        message: "Invalid seller info",
        success: false
      })
    }



    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(password, salt)


    seller.name = name
    seller.phoneNumber = phoneNumber
    seller.storeName = storeName
    seller.password = hashedPassword
    seller.email = email
    seller.area = area
    seller.city = city
    seller.state = state
    seller.zipCode = zipCode
    seller.country = country


    await seller.save()

    return res.status(200).json({
      message: "Info updated",
      success: true
    })
  } catch (e) {
    return res.status(500).json({
      message: "Internal server issue",
      success: false
    })
  }
}

export const logOutSeller = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "Logged out successfully.",
      success: true
    })
  } catch (e) {
    return res.status(500).json({
      message: "Internal server issue",
      success: false
    })
  }
}


export const listedItems = async () => { }