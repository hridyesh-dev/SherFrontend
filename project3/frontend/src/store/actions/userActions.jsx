import axios from "../../api/axiosconfig";
import { loadusers } from "../reducers/userSlice";

// if user is available yeh function local storae se data utha le ga 
export const asynccurrentuser=(user)=>async(dispatch,getState)=>{
    try {
        //yeh voh user hai which is logged in 
        const user=JSON.parse(localStorage.getItem("user"));
        if(user){
            dispatch(loadusers(user))
        }else{
            console.log("User Not Logged In . ");
        }
    } catch (error) {
        console.log(error);
    }
}


export const asyncLoginUser=(user) => async (dispatch,getState)=>{
    try {
        // we only need to check if user is in local storage and is this user is in db
        //is se detail mile gii and usse dikhana hai 
        //user mai se yeh waala user nikalo 
        const {data}=await axios.get(
            `/users?email=${user.email}&password=${user.password}`
        )
        console.log(data[0]);

        //if login store this data into local sorage 
        localStorage.setItem("user",JSON.stringify(data[0]))

    }catch(error){
        console.log(error);
    }
}
export const asyncLogoutUser=(user) => async (dispatch,getState)=>{
    try {
        //data hata do 
        //if login store this data into local sorage 
        // agar local storage mai banda nahi hai toh logged out hai 
        localStorage.removeItem("user")
        console.log("User Logged Out!");

    }catch(error){
        console.log(error);
    }
}

export const  asyncRegisterUser = (user)=>async(dispatch,getState)=>{
    try{
        //dispatchEvent will help us dispatch the event 
        // getState wil help us to get the current state 
        //jo user aaya usse api mai daal lo 
        const res=await axios.post("/users",user)
        console.log(res);
        // jaisa banda register hoga usse local storage mai save krr denge 

    }catch(error){
        console.log(error);
    }
}

