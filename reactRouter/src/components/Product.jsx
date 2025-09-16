import React from 'react'
import { useNavigate } from 'react-router-dom'

const Product = () => {

  // use navigate se variable bana diya
  const navigate=useNavigate()
  
  const naviateHandler=(name)=>{
    navigate(`/product/detail/${name}`)
  }
  
  return (
    <div>
    
      <h1 className=' font-thin text-5xl mb-5 '>Products</h1>
      
      <div className=' mb-10'>
        <h1 className=' text-2xl font-thin'>Product 1</h1>
        <button onClick={()=>naviateHandler("Product 1")} className=' bg-white text-black px-4 py-2 rounded font-bold'>See Details</button>
      </div>

      <div className=' mb-10'>
        <h1 className=' text-2xl font-thin'>Product 2</h1>
        <button onClick={()=>naviateHandler("Product 2")} className=' bg-white text-black px-4 py-2 rounded font-bold'>See Details</button>
      </div>
      
      <div className=' mb-10'>
        <h1 className=' text-2xl font-thin'>Product 3</h1>
        <button onClick={()=>naviateHandler("Product 3")} className=' bg-white text-black px-4 py-2 rounded font-bold'>See Details</button>
      </div>
    
    </div>
  )
}

export default Product