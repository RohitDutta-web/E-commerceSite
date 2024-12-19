import Address from "../models/address.model.js";
import User from "../models/user.model.js";

export const enlistAddress = async (req, res) => {
  try {
    const { street, landMark, city,district, state, zipCode, country } = req.body;
    const userId = req.user.id
    if (!street || !landMark || !city || !district || !state || !zipCode || !country) {
      return res.status(400).json({
        message: "missing address info!",
        success: false
      })
    }
    let user = await User.findById(userId);

    if (user.address) {
      return res.status(400).json({
        message: "can update but can not register new address! ",
        success: false
      })
    }
    const address = await Address.create({
      street,
      landMark,
      city,
      district,
      state,
      zipCode,
      country,
      user: userId
    })
    await address.save()

    user.address = address._id;
    await user.save()
    return res.status(200).json({
      message: "Address created successfully",
      success: true
    })



  } catch (e) {
    console.error(e)
    return res.status(500).json({
      message: "Internal server error!",
      success: false,
    })
  }

}



export const getAddress = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId);

    if (!user.address) {
      return res.status(400).json({
        message: "Please register address!",
        success: false
      })
    }

    const address = await Address.findById(user.address);

    return res.status(200).json(address)
  } catch (e) {
    return res.status(500).json({
      message: "Server issue",
      success: false,
    })
  }
}







export const updateAddress = async (req, res) => {
  try {
    const { street, landMark, city,district, state, zipCode, country } = req.body;

    const user = await User.findById(req.user.id);
    if (!user) {
      return res.status(400).json({
        message: "Invalid user",
        success: false
      })
    }

    const addressId = user.address;
    const address = await Address.findById(addressId);

    address.street = street;
    address.landMark = landMark;
    address.city = city;
    address.district = district;
    address.state = state;
    address.zipCode = zipCode;
    address.country = country;
    await address.save();

    return res.status(200).json({
      message: "Address updated",
      success: true
    })



  } catch (e) {
    return res.status(500).json({
      message: "Internal Server issue!",
      success: false
    })
  }
}
