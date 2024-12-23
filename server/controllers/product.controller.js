import Product from "../models/product.model.js";
import User from "../models/user.model.js";

export const registerProduct = async (req, res) => {
  try {
    const { title, description, price, brand, category, stock, } = req.body;
    if (!title || !description || !price || !brand || !category || !stock) {
      return res.status(400).json({
        message: "Missing product details",
        success: false
      })
    }

    const userId = req.user.id;
    const user = await User.findById(userId);

    if (!user) {
      return res.status(400).json({
        message: "Please login first",
        success: false
      })
    }

    const product = await Product.create({
      title,
      description,
      price,
      brand,
      category,
      enlistedBy: userId,
      stock
    })

    await product.save()
    user.products.push(product._id)

    await user.save();

    return res.status(200).json({
      message: "Product registered successfully!",
      success: true
    })

  } catch (e) {
    return res.status(500).json({
      message: "Server issue",
      success: false
    });
  }
}


export const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const { title, description, price, stock } = req.body;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(400).json({
        message: "Invalid Product",
        success: false
      })
    }

    product.title = title;
    product.description = description;
    product.price = price;

    product.stock = stock;

    await product.save();

    return res.status(200).json({
      message: "Product updated!",
      success: true
    })



  } catch (e) {
    return res.status(500).json({
      message: "Server issue!",
      success: false
    })
  }
}

export const deleteProduct = async (req, res) => {

  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(400).json({
        message: "Invalid product",
        success: false
      })
    }

    await Product.deleteOne({ "_id": productId })

    return res.status(200).json({
      message: "Product removed",
      success: false
    })
  } catch (e) {
    return res.status(500).json({
      message: "Server issue", success: false
    })
  }
}

export const getAllProductDetails = async (req, res) => {
  try {
    const products = await Product.find({});
    if (!products) {
      return res.status(400).json({
        message: "No products",
        success: false
      })
    }

    return res.status(200).json({
      products,
      success: true
    })

  } catch (e) {
    return res.status(500).json({
      message: "server issue!",
      success: false
    })
  }

}

export const getProductDetailsById = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(400).json({
        message: "Invalid product",
        success: false
      })
    }


    return res.status(200).json({
      product,
      success: true
    })
  } catch (e) {
    return res.status(500).json({
      success: false,
      message: "Server issue"
    })
  }

}

export const addToCart = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(400).json({
        message: "Invalid product",
        success: false
      })
    }
    const userid = req.user.id;
    const user = await User.findById(userid);
    if (!user) {
      return res.status(400).json({
        message: "Invalid product",
        success: false
      })
    }

    user.cart.push(product._id);
    await user.save();
    return res.status(200).json({
      message: "Added to cart",
      success: true
    })


  } catch (e) {
    return res.status(500).json({
      message: "Server issue",
      success: false
    })
  }
}

export const addToWishList = async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);
    if (!product) {
      return res.status(400).json({
        message: "Invalid product",
        success: false
      })
    }
    const userid = req.user.id;
    const user = await User.findById(userid);

    if (!user) {
      return res.status(400).json({
        message: "Invalid product",
        success: false
      })
    }



    user.wishList.push(productId);
    await user.save();

    return res.status(200).json({
      message: "Added to Wishlist",
      success: true
    })


  } catch (e) {
    return res.status(500).json({
      message: "Server issue",
      success: false
    })
  }
}

