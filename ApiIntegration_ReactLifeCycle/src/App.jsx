import React from 'react'
import axios from 'axios';
const App = () => {
  const getProduct=async()=>{
    
    try{
      /*
        const strdata = await fetch("https://fakestoreapi.com/products")
        const jsondata=await strdata.json()
        console.log(jsondata);
      */
      const {data}=await axios.get("https://fakestoreapi.com/products")
      console.log(data);

    }catch(error){
      console.log(error);
    }

  }
  return (
    <div>
      <h1>Products</h1>
      <button onClick={()=>getProduct()}>GetProduct</button>

    </div>
  )
}

export default App