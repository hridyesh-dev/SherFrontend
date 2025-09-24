//jaha saara data store ho ga 
import {configureStore} from '@reduxjs/toolkit'

import cartSlice from "./reducers/cartSlice";
import userSlice from "./reducers/userSlice";
import productSlice from "./reducers/productSlice";

export const store = configureStore({

    // yeh reducer hai yeh sirf slice store karega 
    reducer:{
        useReducer : userSlice,
        productReducer : productSlice,
        cartReducer : cartSlice,
    }

})