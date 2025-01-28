import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/auth/authSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';
import sellerReducer from "../features/auth/seller.slice";

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['user', 'isLoggedin' ]
};

const sellerPersistConfig = {
  key: "seller",
  storage,
  whitelist: ["seller", "sellerLoggedIn"], 
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);
const persistedSellerReducer = persistReducer(sellerPersistConfig, sellerReducer);

export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
    seller: persistedSellerReducer
  }
})

export const persistor = persistStore(store);