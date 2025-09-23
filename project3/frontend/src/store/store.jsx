// yaha saara data store hoga 
import { configureStore } from '@reduxjs/toolkit'
import userSlice from "./userSlice";
//humne store ko configure karke reducers pass krr diye 
//reducers ko combine karna hai , multiple reducers aaye ge , combine karna hai reducers ko 
export const store = configureStore({
    reducer: {
        user:userSlice
    },
})

