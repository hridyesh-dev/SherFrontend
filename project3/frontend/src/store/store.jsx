import { configureStore } from '@reduxjs/toolkit'
import userSlice from "./reducers/userSlice";
import cartSlice from "./reducers/cartSlice";
import productSlice from "./reducers/productSlice";

export const store = configureStore({
    //we will save 3 things here
    reducer: {
        userReducer:userSlice,
        productReducer:productSlice,
        cartReducer:cartSlice
    },
})