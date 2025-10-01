import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom'
import { asyncLogOutUser } from '../store/actions/userActions';

const Nav = () => {
  const user = useSelector((state)=>state.userReducer.users);
  console.log(user);

  const dispatch=useDispatch()
  const navigate=useNavigate()

  const logOutHandler=()=>{
    dispatch(asyncLogOutUser());
    navigate("/")
  }

  return (
    <nav className=' mb-10 text-2xl text-white flex justify-center items-center gap-x-5 p-10'>
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/products"}>Products</NavLink>
        {user?(
          <>
            <NavLink to={"/admin/create-product"}>Create Product</NavLink>
            <button onClick={logOutHandler} className=' border-white transition-all duration-150 ease-in-out p-2 px-6 rounded hover:border-2 hover:border-red-500  '>LogOut</button>
          </>
        ):(
          <>
            <NavLink to={"/login"}>Login</NavLink>
          </>
        )}


    </nav>
  )
}

export default Nav