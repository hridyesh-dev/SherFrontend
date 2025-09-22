import React, { useEffect } from 'react'
import axios from './utils/axios';
const App = () => {
  const getProduct=async()=>{
    
    try{
      /*
        const strdata = await fetch("https://fakestoreapi.com/products")
        const jsondata=await strdata.json()
        console.log(jsondata);
      */
      const {data}=await axios.get("/products")
      console.log(data);

    }catch(error){
      console.log(error);
    }

  }

  useEffect(()=>{
    // jab component mount hoga tabh chalega 
    console.log("Use Effect called App.jsx Mounted");
    console.log("Products fetched by useEffect");
    getProduct()
    //jab component hatega tabh chalega 
    return()=>{
        console.log("App.jsx unmounted , useEffect called ");
    }


  },[])
  return (
    <div>
      <h1>Products</h1>
      <button onClick={()=>getProduct()}>GetProduct</button>

    </div>
  )
}

export default App