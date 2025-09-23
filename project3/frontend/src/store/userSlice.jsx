//REDUCER/ SLICE HII STORE KE ANDAR DATA DAAL SAKTA HAI 

//yaha user ka data hoga 
// User ka data yaha rakhege 
// SLICE se reducer nikle ga slice se action nikle ga 
import { createSlice } from "@reduxjs/toolkit";

//this name cant be changed 
// reducer mai data lie karta hai 
const initialState={
    data:[]
}

// create slice will give two things reducer and action 
const userSlice = createSlice({
    
    //name of the slice 
    name:"user",
    
    //data ko slice ke andar pass krr diya 
    initialState,
    
    //iske reducers kya hai 
    //action ka kaam hota hai cheezo ka kuch karna

    //yehi reducer hai jo initial state ke andar data daal sakta hai 
    reducers:{
        
        /*
            this is also a sync action  
            these are not functions these are actions , actions are only dispatched not called
            only this function can enter data in our state  
            action mai jo bhi aaye ga voh state mai pass hoga  
            you cant call the api in this thing , itll give ou error 
        */
    
        loaduser:(state,action)=>{
            // state ke payload mai daal do jo action ke payload mai aa raha hai jo 
            // state mai data chale gaya
            state.data=action.payload
        }
    },
})

export const {loaduser}=userSlice.actions;

//reducer ko tore mai daalna 
export default userSlice.reducer;