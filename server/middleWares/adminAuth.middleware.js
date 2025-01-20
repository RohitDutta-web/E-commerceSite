import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config({})

export const adminAuthMiddleWare = (req, res, next) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(400).json({
      message: "Please login",
      success: false
    })

    const verifiedData = jwt.verify(token, process.env.SECRET_KEY)
    req.admin = verifiedData;
    next();
   } catch (err) {
    return res.status(500).json({
      message: "Internal issue",
      success: false
     })
   }
 }