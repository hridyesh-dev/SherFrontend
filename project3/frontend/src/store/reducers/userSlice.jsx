import { createSlice } from "@reduxjs/toolkit";

//initial state yaa toh null hoga ya toh object hoga 
const initialState={
    users:[]
}

const userSlice=createSlice({
    name:"user",
    initialState,
    // iske andar voh sync actions honge that will change the initial state 
    reducers:{
        //when loader is called it will give us state and action 
        // state:Initial State 
        loadusers:(state, action ) => {
            //jo function call karege voh state mai changes karega 
            state.users = action.payload
        }
    }

})
// slice action aur reducer ko export karta hai 
export default userSlice.reducer;
//action which will be dispatched to make changes 
export const {loadusers} = userSlice.actions