// yaha saara data store hoga 
import { configureStore } from '@reduxjs/toolkit'
import userSlice from "./userSlice";
//humne store ko configure karke reducers pass krr diye 
//reducers ko combine karna hai , multiple reducers aaye ge , combine karna hai reducers ko 
export const store = configureStore({
    // here we group the slice , store is group of data 
    // yaha humm group ka data rakhege
    reducer: {
        // USER aur store jo jod rahe hai 
        user:userSlice
    },
})

