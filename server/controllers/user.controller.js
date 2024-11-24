import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"


//signing up users
export const registerUser = async (req, res) => {
  try {

    const { name, email, phoneNumber, password } = req.body;
    
    if (!name || !email || !phoneNumber || !password) {
      return res.status(400).json({
        message: "Missing credentials",
        success: false
      })
    }

    const existingUser = await User.findOne({ email })
    
    if (existingUser) {
      return res.status(400).json({
        message: "User already exits",
        success: false
      })
    }

    const hashedPassword = await bcrypt.hash(password, 10)


    await User.create({
      name,
      email,
      password: hashedPassword,
      phoneNumber
    })

    return res.status(200).json({
      message: "account created successfully!",
      success: true
    })

   } catch (e) {
    console.log(e);
    return res.status(500).json({
      message: "Internal Server error",
      success: false
    })
    
  }
}





//user login

export const logIn = async (req, res) => {
  try {

    const { email, password } = req.body;
    
    if (!email || !password) {
      return res.status(400), json({
        message: "Missing credentials",
        success: false
      })
    }


    const user = await User.findOne({ email })

    if (!user) {
      return res.status(400).json({
        message: "Invalid user!",
        success: false
      })
    }

    const comparePassword = await bcrypt.compare(password, user.password)
    if (!comparePassword) {
      return res.status(400).json({
        message: "Invalid credentials",
        success: false
      })
    }


    const tokenData = {
      userId: user._id
    }

    const token = jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: "1d" })
    
    user = {
       _id: user._id,

    }

   } catch (e) {
    console.log(e);
    return res.status(500).json({
      message: "Internal Server error",
      success: false
    })
    
  }
}








//user update
export const updateUser = async (req, res) => {
  try {

   } catch (e) {
    console.log(e);
    return res.status(500).json({
      message: "Internal Server error",
      success: false
    })
    
  }
}













//user log out

export const logOut = async (req, res) => {
  try {

   } catch (e) {
    console.log(e);
    return res.status(500).json({
      message: "Internal Server error",
      success: false
    })
    
  }
}
