import { createSlice } from "@reduxjs/toolkit";

const initialState={
    products:[]
}

const productSlice=createSlice({
    
    name:"product",
    initialState,
    //actions which will change the state -----> current-State
    reducers:{
        //this is a sync function cant be async 
        // yeh load data can only change the state
        loadproduct:(state,action)=>{
            state.products = action.payload
        }
    }

})

export default productSlice.reducer
export const {loadproduct} = productSlice.actions