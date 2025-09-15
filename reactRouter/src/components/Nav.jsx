import React from 'react'
import { NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className="w-[60%] mx-auto pt-5 flex items-center justify-between">
      <NavLink className={(e) => ( e.isActive ? "text-red-300" : "" )} to="/">Home</NavLink>
      <NavLink className={(e) => ( e.isActive ? "text-red-300" : "" )} to="/product">Prod</NavLink>
      <NavLink className={(e) => (e.isActive ? "text-red-300": "" )} to="/service">Service</NavLink>
      <NavLink className={(e) => (e.isActive ? "text-red-300" : "" )} to="/about">About</NavLink>
    </div>
  )
}

export default Nav
