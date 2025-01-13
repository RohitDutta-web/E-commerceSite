import express from "express";
import { registerUser, logIn, getUserDetails, updateUser,logOut } from "../controllers/user.controller.js";
import { authMiddleWare } from "../middleWares/auth.middleWare.js";
const router = express();

router.post("/register", registerUser);
router.post("/login", logIn);
router.get("/getUserDetails", authMiddleWare, getUserDetails);
router.patch("/profile/update", authMiddleWare, updateUser);
router.get("/logout", logOut);

export default router;