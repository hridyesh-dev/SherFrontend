import React from 'react';
import {useSelector } from 'react-redux';
import { NavLink} from 'react-router-dom';

const Nav = () => {
  const user = useSelector((state) => state.userReducer.users);
  console.log("Logged in user:", user);


  return (
    <nav className='mb-10 text-2xl text-white flex justify-center items-center gap-x-5 p-10'>
      <NavLink to={"/"}>Home</NavLink>
      {user ? (
        <>
          {user && user.isAdmin && (
            <NavLink to={"/admin/create-product"}>Create Product</NavLink>
          )}
          <NavLink to={"/admin/user-profile"}>Settings</NavLink>
        </>
      ) : (
        <NavLink to={"/login"}>Login</NavLink>
      )}
    </nav>
  );
};

export default Nav;