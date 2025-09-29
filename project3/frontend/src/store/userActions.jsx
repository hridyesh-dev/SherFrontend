//SLICE MAI DATA ACTIONS SE AAYE GA 

// api ko call karege aur backend se data laaye ge 
import axios from '../api/axiosconfig';
import { loaduser } from './userSlice';

//api calling actions ke andar hogi 
export const asyncGetUsers= ()=>async(dispatch,getState)=>{
    try {
        
        //this will show the current state 
        console.log("current state : ",getState);
        
        // data coming with the help of api call 
        const res=await axios.get("/users")
        console.log("api data : ",res.data);
        
        //data being passed by action to slice 
        dispatch(loaduser(res.data))
    } catch (error) {
        console.log(error);
    }
}