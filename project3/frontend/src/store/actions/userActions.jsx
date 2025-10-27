
import axios from "../../api/axiosconfig"
import { loaduser,removeUser } from "../reducers/userSlice";

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

export const asyncLoginUser = (user) => async (dispatch, getState) => {
    try {
            const { data } = await axios.get(
                `/users?email=${user.email}&password=${user.password}`
            );
            console.log(data[0]);
            localStorage.setItem("user", JSON.stringify(data[0]));
            dispatch(loaduser(data[0]));
        } catch (error) {
        console.log(error);
    }
};

// to logout the current user 
//logOut user 
export const asyncLogOutUser = () => async(dispatch,getState) => {
    try {
        //Remove this data in local storage , banda logOut ho gaya
        localStorage.removeItem("user");
        console.log("User Logged Out");
        dispatch(removeUser())
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

export const asyncUpdateuser = (id, user) => async (dispatch, getState) => {
    try {
        const { data } = await axios.patch("/users/"+id, user);
        console.log(data);

        //jo data db mai update hua hai usse local storage mai bhi update krr do
        // Update localStorage and Redux
        localStorage.setItem("user", JSON.stringify(data));
        //application mai bhi change ho gaya 
        dispatch(asyncCurrentUser());
    } catch (error) {
        console.log("Update failed:", error);
    }
};
export const asyncdeleteuser = (id) => async (dispatch, getState) => {
    try {
        await axios.delete("/users/"+id);
        dispatch(asyncLogOutUser());
        console.log("user deleted sucessfully ");
    } catch (error) {
        console.log("Update failed:", error);
    }
};