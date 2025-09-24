import { createSlice } from "@reduxjs/toolkit";

//initial state yaa toh null hoga ya toh object hoga 
const initialState={
    carts:[]
}

const cartSlice=createSlice({
    name:"cart",
    initialState,
    // iske andar voh sync actions honge that will change the initial state 
    reducers:{
        //when loader is called it will give us state and action 
        // state:Initial State 
        loadcart:(state,action)=>{
            //jo function call karege voh state mai changes karega 
            state.carts=action.payload
        }
    }

})

export default cartSlice.reducer;
export const {loadcart} = cartSlice.actions