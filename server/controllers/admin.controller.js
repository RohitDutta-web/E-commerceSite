import Admin from "../models/admin.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({});

export const register = async (req, res) => {
  try {
    const creatorId = req.admin.companyId;
    const creatorAdmin = await Admin.findOne({ creatorId })
    if (!creatorAdmin) {
      return res.status(400).json({
        message: "Invalid creator admin",
        success: false
      })
    }

    const { companyId, email, password, profile } = req.body;
    if (!companyId || !email || !password || !profile) {
      return res.status(400).json({
        message: "Missing credentials",
        success: false
      })
    }

    const admin = await Admin.findOne({ companyId })
    if (admin) {
      return res.status(400).json({
        message: "Already registered",
        success: false
      })
    }

    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    await Admin.create({
      companyId,
      email,
      password: hashedPassword,
      profile
    })

    return res.status(200).json({
      message: "Admin created",
      success: true
    })
  } catch (e) {
    return res.status(500).json({
      message: "Internal server issue",
      success: false
    })
  }
}


export const logIn = async (req, res) => {
  try {
    const { companyId, password } = req.body
    if (!companyId || !password) {
      return res.status(400).json({
        message: "Missing credentials",
        success: false
      })
    }


    let admin = await Admin.findOne({ companyId })

    if (!admin) {
      return res.status(400).json({
        message: "Invalid admin",
        success: false
      })
    }


    const comparePassword = await bcrypt.compare(password, admin.password)
    if (!comparePassword) {
      return res.status(400).json({
        message: "Invalid credentials",
        success: false,
      })
    }
    const tokenData = {
      id: admin._id
    }
    const token = jwt.sign(tokenData, process.env.SECRET_KEY, { expiresIn: "1d" });
    admin = {
      _id: admin._id,
      companyId: admin.companyId,
      email: admin.email,
      profile: admin.profile,
    }

    return res.status(200).cookie("token", token,
      {
        maxAge: 1 * 24 * 60 * 60 * 1000,
        httpOnly: true,
        secure: false,
        sameSite: 'lax',

      }
    ).json({
      success: true,
      message: "Login successful",
      admin
    })



  } catch (e) {
    return res.status(500).json({
      message: "Internal server issue",
      success: false
    })
  }
}

export const logOut = async (req, res) => {
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


export const changePassword = async (req, res) => {
  try {
    const id = req.admin.companyId;
    /*   console.log(id); */

    const { newPassword, password } = req.body;
    /*  console.log(req.body); */


    // Fetch admin details from the database
    const admin = await Admin.findOne({ id });

    if (!admin) {
      return res.status(400).json({
        message: "Invalid admin",
        success: false,
      });
    }


    // Compare old password with hashed password in the database
    const checkPassword = await bcrypt.compare(password, admin.password)





    if (!checkPassword) {
      return res.status(400).json({
        message: "Invalid credential",
        success: false,
      });
    }

    // Hash the new password before saving it
    const hashedPassword = await bcrypt.hash(newPassword, 10);
    admin.password = hashedPassword;

    // Save the updated admin object
    await admin.save();

    return res.status(200).json({
      message: "Password Updated",
      success: true,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Internal server error",
      success: false,
    });
  }
};