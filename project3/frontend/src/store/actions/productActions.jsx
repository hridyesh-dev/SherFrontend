import axios from "../../api/axiosconfig"
import { loadproduct } from "../reducers/productSlice";

//it will make an api call to load product
export const asyncLoadProduct = ()=>async ( dispatch , getState )=>{
    try {
        const {data}= await axios.get("/products")
        dispatch(loadproduct(data))
    }catch(error){
        console.log(error);
    }
}

export const asyncCreateProduct=(product)=> async(dispatch,getState)=>{
    try {
        await axios.post("/products",product)
        // jaise hii product db mai save hua usse redux state mai bhi save krr do
        dispatch(asyncLoadProduct());
    }catch(error){
        console.log(error);
    }
}

