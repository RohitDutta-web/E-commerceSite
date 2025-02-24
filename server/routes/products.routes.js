import express from "express";
import { authMiddleWare } from "../middleWares/auth.middleWare.js";
import { sellerAuthMiddleWare } from "../middleWares/sellerAccount.middleWare.js";
import multerMiddleware from "../config/multer.js";
import { registerProduct,getProductsTHoughCategory, updateProduct, deleteProduct, addToCart, addToWishList, getAllProductDetails, getProductDetailsById, removeFromCart, removerFromWishList } from "../controllers/product.controller.js";

const router = express();

router.post(
  "/register",
  sellerAuthMiddleWare,
  multerMiddleware,
  registerProduct
);

router.patch("/update/:id", sellerAuthMiddleWare, updateProduct);
router.delete("/delete/:id", sellerAuthMiddleWare, deleteProduct);
router.get("/addToCart/:id", authMiddleWare, addToCart);
router.get("/removeFromCart/:id", authMiddleWare, removeFromCart);
router.get("/addToWishList/:id", authMiddleWare, addToWishList);
router.get("/removeFromWishList/:id", authMiddleWare, removerFromWishList);
router.get("/allProducts", getAllProductDetails);
router.get("/getProduct/:id", getProductDetailsById);
router.get("/:category", getProductsTHoughCategory)

export default router;