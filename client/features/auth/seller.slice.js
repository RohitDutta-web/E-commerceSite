import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  seller: null,
  sellerLoggedIn: false,
}

export const sellerSlice = createSlice({
  name: "seller",
  initialState,
  reducers: {
    setSeller : (state, action) => {
     state.seller = action.payload;
    },

    setSellerLoggedIn: (state,action) => {
      state.sellerLoggedIn = action.payload
    }
  }
})

export default sellerSlice.reducer
export const {setSeller, setSellerLoggedIn} = sellerSlice.actions 