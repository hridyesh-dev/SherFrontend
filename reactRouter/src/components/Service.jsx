import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

const Service = () => {
  
  const navigate=useNavigate();

  
  return (
    <div>
      
      <h1 className=' mb-3 text-5xl font-thin'>Service</h1>
      
      <button onClick={()=>navigate("/service/detail")} className='  bg-white text-black px-4 py-2 rounded font-bold'>Service-Details</button>
      <button onClick={()=>navigate("/service/update")} className='  bg-white text-black px-4 mx-2.5 py-2 rounded font-bold'>Service-Update</button>
      
      {/* Kaha show hoga  service detail */}
      <hr className=' my-10'/>
      
      {/* 
          Jo componet dusre page pe khul raha tha , 
          Mujhe service ke andar service detail banana hai , jaha yeh outlet hai waha 
          service detail aaye ga 
      */}
      <Outlet/>
    
    </div>
  )
}

export default Service