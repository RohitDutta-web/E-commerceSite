import express from "express";
import { enlistAddress, getAddress, updateAddress } from "../controllers/address.controller.js";
import { authMiddleWare } from "../middleWares/auth.middleWare.js";

const router = express();

router.post("/enlistAddress", authMiddleWare, enlistAddress);
router.get("/getAddress", authMiddleWare, getAddress);
router.post("/updateAddress", authMiddleWare, updateAddress);

export default router;

