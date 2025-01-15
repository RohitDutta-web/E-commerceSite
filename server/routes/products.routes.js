import express from "express";
import { authMiddleWare } from "../middleWares/auth.middleWare.js";
import { sellerAuthMiddleWare } from "../middleWares/sellerAccount.middleWare.js";
import { registerProduct, updateProduct, deleteProduct, addToCart, addToWishList, getAllProductDetails, getProductDetailsById } from "../controllers/product.controller.js";

const router = express();


router.post("/register", sellerAuthMiddleWare, registerProduct);
router.patch("/update/:id", sellerAuthMiddleWare, updateProduct);
router.get("/delete/:id", sellerAuthMiddleWare, deleteProduct);
router.get("/addToCart/:id", authMiddleWare, addToCart);
router.get("/addToWishList/:id", authMiddleWare, addToWishList);
router.get("/allProducts", getAllProductDetails);
router.get("/getProduct/:id", getProductDetailsById);

export default router;