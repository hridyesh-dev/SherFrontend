//ACTION KA KAAM HAI : CALLING THE API , DATA CALL KARNA 
// yaha user ka action hoga , api ko call karege api se data laaye ge 
// action ka kaam hota hai cheeze ko kuch karnaa 

import axios from "../api/axiosconfig";

export const asyncgetusers=async()=>{
    try {
        const res= await axios.get("/users")
        console.log(res);
    }catch(error){
        console.log(error);
    }
}