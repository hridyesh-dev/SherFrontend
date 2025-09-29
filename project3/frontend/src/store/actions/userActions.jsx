import axios from "../../api/axiosconfig"

//login user 
export const asyncLoginUser=(user)=> async(dispatch,getState)=>{
    try {
        //check if person is in db 
        const {data}=await axios.get(
            `/users?email=${user.email}&password=${user.password}`
        )
        console.log(data[0]);
        //save this data in local storage , banda login ho gaya
        localStorage.setItem("user")
        
    } catch (error) {
        console.log(error);
    }
}


//action mai hogi api call 
export const asyncRegisterUser= (user)=> async (dispatch,getState)=>{
    try {
        const res=await axios.post("/users",user)
        console.log(res);
    } catch (error) {
        console.log(error);
    }
}