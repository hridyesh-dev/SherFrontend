import { createSlice } from "@reduxjs/toolkit";

//initial state yaa toh null hoga ya toh object hoga 
const initialState={
    products:[]
}

const productSlice=createSlice({
    name:"product",
    initialState,
    // iske andar voh sync actions honge that will change the initial state 
    reducers:{
        // yeh function sirf sync data call karega , here we cant call api 
        //when loader is called it will give us state and action 
        // state:Initial State 
        loadproducts:(state, action ) => {
            //jo function call karege voh state mai changes karega 
            state.products = action.payload
        }
    }

})

export default productSlice.reducer;
export const {loadproducts} = productSlice.actions