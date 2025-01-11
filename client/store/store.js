import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../features/auth/authSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from 'redux-persist/lib/storage';

const persistConfig = {
  key: "root",
  storage,
  whitelist: ['user', 'isLoggedin']
};

const persistedUserReducer = persistReducer(persistConfig, userReducer);

export const store = configureStore({
  reducer: {
    user: persistedUserReducer,
  }
})

export const persistor = persistStore(store);