import express from "express";
import { register, logIn, logOut, changePassword } from "../controllers/admin.controller.js";
import { adminAuthMiddleWare } from "../middleWares/adminAuth.middleware.js";

const router = express();

router.post("/register",adminAuthMiddleWare, register);
router.post("/logIn", logIn);
router.get("/logOut", adminAuthMiddleWare, logOut);
router.patch("/changePassword", adminAuthMiddleWare, changePassword);

export default router;