import React from 'react'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className=' justify-center font-mono  flex  gap-x-10 items-center'>
        
        <NavLink className={(e)=>e.isActive?" text-green-400 transition-all ease-in-out duration-200 ":""} to="/">Home</NavLink>
        
        <NavLink className={(e)=>e.isActive?" text-green-400 transition-all ease-in-out duration-200":""} to="/recepies">Recepies</NavLink>
        
        <NavLink className={(e)=>e.isActive?" text-green-400 transition-all ease-in-out duration-200":""} to="/about">About</NavLink>
        
        <NavLink 
            className={` border-2 border-white px-2  rounded ${(e)=>e.isActive?" text-green-400 transition-all ease-in-out duration-200":""} hover:shadow hover:shadow-white hover:bg-green-600 hover:text-black hover:font-bold hover:border-black`} 
            to="/create-recepie">
            CreateRecepie
        </NavLink>
    </div>
  )
}

export default Navbar