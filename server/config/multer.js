import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import cloudinary from "./cloudinary.js";

const storage = new CloudinaryStorage({
  cloudinary: cloudinary,
  params: {
    folder: "Ecommerce",
    allowed_formats: ["jpeg", "png", "jpg"],
  },
});

const upload = multer({ storage });

const multerMiddleware = (req, res, next) => {
  upload.single("picture")(req, res, (err) => {
    if (err) {
      return res.status(500).json({ message: "File upload failed", error: err.message });
    }
    next();
  });
};

export default multerMiddleware;
