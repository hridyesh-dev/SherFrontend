import {createSlice} from "@reduxjs/toolkit";
//THIS create slice will take a single function 
const userSlice=createSlice({
    name:"user",
    initialState:[],
    reducers:{
        // here we will add our micro reducers 
        addUser(state,action){
            // jo data aa raha hai usse push krr do 
            state.push(action.payload)
        },

        removeUser(state,action){
            //kaha se array change karni hai and kitne elements udane hai 
            state.splice(action.payload,1);
        },

        clearAllUsers(state,action){
            console.log("deleting");
            state.splice(0,state.length)
        },
    },
    extraReducers(builder){
        builder.addCase(userSlice.actions.clearAllUsers,()=>{
            return []
        })
    }
})
//slice ko export krr rahe hai
console.log(userSlice.actions);
export const  {addUser,removeUser,clearAllUsers} = userSlice.actions
export default userSlice.reducer

