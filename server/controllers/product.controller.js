import Product from "../models/product.model.js";
import Seller from "../models/seller.model.js";
import User from "../models/user.model.js";


export const registerProduct = async (req, res) => {


  try {


    const { title, description, price, brand, category, stock, discount } = req.body;
    if (!title || !description || !price || !brand || !category || !stock) {
      return res.status(400).json({
        message: "Missing product details",
        success: false
      })
    }



    const sellerId = req.seller.id;
    const seller = await Seller.findById(sellerId);

    if (!seller) {
      return res.status(400).json({
        message: "Please login first",
        success: false
      })
    }

    let imageUrl = "";
    if (req.file) {
      imageUrl = req.file.path;

    }





    const product = await Product.create({
      title,
      description,
      price,
      brand,
      category,
      enlistedBy: sellerId,
      stock,
      picture: imageUrl,
      discount
    })

    await product.save()
    seller.listedItems.push(product._id)

    await seller.save();

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

    product.title = title || product.title;
    product.description = description || product.description;
    product.price = price || product.price;

    product.stock = stock || product.stock;

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


    await Product.findByIdAndDelete(productId)

    return res.status(200).json({
      message: "Product removed",
      success: true
    })
  } catch (e) {
    return res.status(500).json({
      message: "Server issue",
      success: false
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


export const getProductsTHoughCategory = async (req, res) => {
  try {
    const category = req.params.category

    const products = await Product.find({ category: category });

    if (!products) {
      return res.status(400).json({
        message: "Category products not available",
        successL: false
      })
    }

    return res.status(200).json({
      products
    })

  }
  catch (e) {
    return res.status(500).json(
      { message: "Internal error", success: false }

    )
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

    if (product.stock < 1) {
      return res.status(400).json({
        message: "Out of stock",
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
    product.stock = product.stock - 1
    await product.save()
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


export const removerFromWishList = async (req, res) => {
  try {
    const productId = req.params.id;
    const userId = req.user.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({
        message: "Invalid user",
        success: false
      })
    }
    let wishList = user.wishList;
    wishList = wishList.filter(item => item.toString() !== productId);

    await user.save();

    return res.status(200).json({
      message: "Product removed from wishlist",
      success: true,
      wishList: wishList
    });

  } catch (e) {
    return res.status(500).json({
      message: " server issue",
      success: false

    })
  }
}



export const removeFromCart = async (req, res) => {
  try {
    const productId = req.params.id;
    const userId = req.user.id;
    const user = await User.findById(userId);
    if (!user) {
      return res.status(400).json({
        message: "Invalid user",
        success: false
      })
    }
    let cart = user.cart;
    cart = cart.filter(item => item.toString() !== productId);

    await user.save();

    return res.status(200).json({
      message: "Product removed from cart",
      success: true,
      cart: cart
    });

  } catch (e) {
    return res.status(500).json({
      message: " server issue",
      success: false

    })
  }
}


