import { createSlice } from "@reduxjs/toolkit";

const initialState={
    users:null
}

const userSlice = createSlice({
    
    name:"user",
    initialState,
    //actions which will change the state -----> current-State
    reducers:{
        // yeh load data can only change the state
        loaduser:(state , action )=>{
            state.users = action.payload
        },

        removeUser:(state,action)=>{
            state.users=null;
        }
    }

})

export default userSlice.reducer
export const {loaduser,removeUser} = userSlice.actions