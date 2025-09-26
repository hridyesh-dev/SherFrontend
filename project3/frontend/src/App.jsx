import axios from './api/axiosconfig';
import React, { useEffect } from 'react'

const App = () => {
  
  const getProduct=async ()=>{
    try {
      const res=await axios.get("/products")
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(()=>{
    getProduct();
  },[])
  
  return (

    <div>
      App
    </div>
  )
}

export default App