import { configureStore } from "@reduxjs/toolkit";
import cartReducer from './cartSlice'
import productReducer from './productSlice'
import checkoutSlice from "./checkoutSlice";
import authSlice from "./authSlice";

const store = configureStore({
    reducer : {
        cart : cartReducer,
        product : productReducer,
        auth : authSlice,
        checkout : checkoutSlice
    }
})

export default store