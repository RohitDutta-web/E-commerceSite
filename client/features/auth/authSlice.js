import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  isLoggedin: false,
  address: null,
}

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setIsLoggedin: (state, action) => {
      state.isLoggedin = action.payload;
    },
    setAddress: (state, action) => {
      state.address = action.payload;
    }
  }
})

export const { setUser,setIsLoggedin,setAddress } = userSlice.actions
export default userSlice.reducer

