import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Nav = () => {
  return (
    <div className=" w-[60%] mx-auto pt-5 flex items-center justify-between">
        <Link  to="/">Home</Link>
        <Link to="/product">Prod</Link>
        <Link to="/service">Service</Link>
        <Link to="/about">About</Link>
    </div>
  )
}

export default Nav