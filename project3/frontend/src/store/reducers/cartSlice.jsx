import { createSlice } from "@reduxjs/toolkit";

const initialState={
    carts:[]
}

const cartSlice=createSlice({
    name:"cart",
    initialState,
    //actions which will change the state -----> current-State
    reducers:{
        // yeh load data can only change the state
        loadcart:(state,action)=>{
            state.carts=action.payload
        }
    }
})

export default cartSlice.reducer
export const {loadcart} = cartSlice.actions