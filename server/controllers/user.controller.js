import User from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken"


//signing up users
export const registerUser = async (req, res) => {
  try {

    const { name, email, phoneNumber, password, profile } = req.body;

    if (!name || !email || !phoneNumber || !password || !profile) {
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
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);


    await User.create({
      name,
      email,
      password: hashedPassword,
      phoneNumber,
      profile,
    })

    return res.status(200).json({
      message: "account created successfully!",
      success: true
    })

  } catch (e) {
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


    let user = await User.findOne({ email })

    if (!user) {
      return res.status(400).json({
        message: "Invalid user",
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
      id: user._id
    }

    const token = jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: "1d" })

    user = {
      _id: user._id,
      name: user.name,
      email: user.email,
      phoneNumber: user.phoneNumber,
      address: user.address,
    }

     return res.status(200).cookie("token", token,
      {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: false,
        sameSite: 'lax',
 
      }
    ).json({
      message: "login successful",
      token,
      user,
      success: true
    })

  } catch (e) {
    return res.status(500).json({
      message: "Internal server error!",
      success: false
    })

  }
}


export const getUserDetails = async (req,res) => {
  try {
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(404).json({ message: "User not found.", success: false });
    }

    return res.status(200).json(user);
  } catch (e) {
    res.status(500).json({
      message: "Internal server issue!",
      success: false,
    })
  }
}





//user update
export const updateUser = async (req, res) => {
  try {
    const { name, phoneNumber, password } = req.body;
    const user = await User.findById(req.user.id);

    if (!user) {
      return res.status(400).json({
        message: "user not found",
        success: false,
      })
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    user.name = name ;
    user.phoneNumber = phoneNumber;
    user.password = hashedPassword;
    await user.save();
    return res.status(200).json({
      message: "Update complete",
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













//user log out

export const logOut = async (req, res) => {
  try {
    return res.status(200).cookie("token", "", { maxAge: 0 }).json({
      message: "Logged out successfully.",
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
