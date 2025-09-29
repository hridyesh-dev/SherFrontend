import { createSlice } from "@reduxjs/toolkit";

const initialState={
    data:[]
}
//slice holds the data 
const userSlice=createSlice({
    name:"user",
    initialState,
    // these reucers can only make changes in the initial state , with the help of actions 
    reducers:{
        loaduser:(state,action)=>{
            state.data=action.payload
        }
    }
})
export const {loaduser} = userSlice.actions
export default userSlice.reducer;