//yaha user ka data hoga 
// User ka data yaha rakhege 
import { createSlice } from "@reduxjs/toolkit";

//this name cant be changed 
const initialState={
    data:[]
}

// create slice will give two things reducer and action 
const userSlice = createSlice({
    //iska naam kya hai 
    name:"user",
    //data ko slice ke andar pass krr diya 
    initialState,
    //iske reducers kya hai 
    //action ka kaam hota hai cheezo ka kuch karna
    reducers:{},
})
//reducer ko tore mai daalna 
export default userSlice.reducer;