import express from "express";
import { authMiddleWare } from "../middleWares/auth.middleWare.js";
import { registerProduct, updateProduct, deleteProduct, addToCart, addToWishList, getAllProductDetails, getProductDetailsById } from "../controllers/product.controller.js";

const router = express();


router.post("/registerProduct", authMiddleWare, registerProduct);
router.post("/updateProduct/:id", authMiddleWare, updateProduct);
router.get("/deleteProduct/:id", authMiddleWare, deleteProduct);
router.get("/addToCart/:id", authMiddleWare, addToCart);
router.get("/addToWishList/:id", authMiddleWare, addToWishList);
router.get("/allProducts", authMiddleWare, getAllProductDetails);
router.get("/getProduct/:id", authMiddleWare, getProductDetailsById);

export default router;