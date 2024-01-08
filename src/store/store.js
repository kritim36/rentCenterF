import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import productReducer from './productSlice'
import authReducer from './authSlice'
import checkoutSlice from "./checkoutSlice";

const store = configureStore({
    reducer : {
        cart : cartReducer,
        product : productReducer,
        auth : authReducer,
        checkout : checkoutSlice
    }
})

export default store