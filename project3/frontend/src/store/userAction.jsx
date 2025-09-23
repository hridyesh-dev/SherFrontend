// ACTION KO KABHI KABHI SERVICES BHI KEHTE HAI 

// action ka kaam hota hai cheeze ko kuch karnaa 
//ACTION KA KAAM HAI : CALLING THE API , DATA CALL KARNA 
// yaha user ka action hoga , api ko call karege api se data laaye ge 
import axios from "../api/axiosconfig";
import { loaduser } from "./userSlice";
export const asyncgetusers = () => async (dispatch,getState) =>{
    try {
        
        // this will give us current state 
        console.log("Current state : >>>>>>>>>> ",getState());
        const res= await axios.get("/users")
        // jo action se data aa raha hai uss ko slice mai daalna hai 
        dispatch(loaduser(res.data));
    }catch(error){
        console.log(error);
    }
}