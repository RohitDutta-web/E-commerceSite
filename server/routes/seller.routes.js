import express from "express";
import { logInSeller, updateSeller, registerSeller, logOutSeller } from "../controllers/seller.controller.js";
import { sellerAuthMiddleWare } from "../middleWares/sellerAccount.middleWare.js";
const router = express()

router.post("/register", registerSeller);
router.patch("/update", sellerAuthMiddleWare, updateSeller);
router.post("/logIn", logInSeller);
router.get("/logOut", sellerAuthMiddleWare, logOutSeller)
export default router;