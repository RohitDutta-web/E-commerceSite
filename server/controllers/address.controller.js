import Address from "../models/address.model.js";
import User from "../models/user.model.js";

export const enlistAddress = async (req, res) => {
  try {
    const { street, landMark, city, state, zipCode, country } = req.body;
    const userId = req.user.id
    if (!street || !landMark || !city || !state || !zipCode || !country) {
      return res.status(400).json({
        message: "missing address info!",
        success: false
      })
    }
    let user = await User.findById(userId);
    const address = await Address.create({
      street,
      landMark,
      city,
      state,
      zipCode,
      country,
      user: userId
    })
    user.address.push(address._id)
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


export const deleteAddress = async (req, res) => {
  try {
    const { id } = req.body;
    const address = await Address.findByIdAndDelete(id);
    if (!address) return res.status(400).json({
      message: "Address not found!",
      success: false
    })

    res.status(200).json({
      message: "Address deleted!",
      success: true
    })
  } catch (e) { }


}


export const updateAddress = async (req, res) => {
  try {
    const { id } = req.params.id;
    
   } catch (e) {
    return res.status(500).json({
      message: "Internal Server issue!",
      success: false
    })
  }
 }
