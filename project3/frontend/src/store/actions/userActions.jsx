import axios from "../../api/axiosconfig"
import { loaduser } from "../reducers/userSlice";

//action mai hogi api call 
// to Regisering A New User
export const asyncRegisterUser= (user)=> async (dispatch,getState)=>{
    try{
        const res=await axios.post("/users",user)
        console.log(res);
    }catch(error){
        console.log(error);
    }
}

//login user 
// check if person exist in db and then set in local storage 
// JO USER SAVE HAI LOCAL STORAGE MAI VOH LOGIN HAI 

export const asyncLoginUser=(user)=> async(dispatch,getState)=>{
    try {
        //check if person is in db - if it is already registered - and then check for 
        const {data}=await axios.get(
            `/users?email=${user.email}&password=${user.password}`
        )
        console.log(data[0]);
        //save this data in local storage , banda login ho gaya
        localStorage.setItem("user",JSON.stringify(data[0]))      
    }catch(error){
        console.log(error);
    }
}

// to logout the current user 
//logOut user 
export const asyncLogOutUser = () => async(dispatch,getState) => {
    try {
        //Remove this data in local storage , banda logOut ho gaya
        localStorage.removeItem("user");
        console.log("User Logged Out");
    }catch(error){
        console.log(error);
    }
}

//current user 
//to get current user 
export const asyncCurrentUser=()=> async(dispatch,getState)=>{
    try {
        //user which is already logged in 
        // with the elp of getItem we will be able to do this 
        const user = JSON.parse(localStorage.getItem("user"));
        if(user){
            dispatch(loaduser(user))
        }else{
            console.log("User Not Logged in ");
        }
    }catch(error){
        console.log(error);
    }
}

