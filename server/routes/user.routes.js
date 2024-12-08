import express from "express";
import { registerUser, logIn, getUserDetails, updateUser,logOut } from "../controllers/user.controller.js";
import { authMiddleWare } from "../middleWares/auth.middleWare.js";
const router = express();

router.post("api/register", registerUser);
router.post("api/login", logIn);
router.get("api/getUserDetails", authMiddleWare, getUserDetails);
router.post("api/update", authMiddleWare, updateUser);
router.get("api/logout", authMiddleWare, logOut);

export default router;