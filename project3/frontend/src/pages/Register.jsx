import React from 'react'
import { nanoid } from 'nanoid'
import { Link, useNavigate } from 'react-router-dom'
import {useForm} from "react-hook-form" 

import { useDispatch } from "react-redux";
import { asyncRegisterUser } from "../store/actions/userActions";

const Register = () => {
    
    const {register,reset,handleSubmit} = useForm()
    const dispatch=useDispatch()
    const navigate=useNavigate()

    const RegisterHandler=(user)=>{
        user.id=nanoid()
        user.isAdmin=false
        console.log(user) 
        dispatch(asyncRegisterUser(user))
        reset()
        navigate("/login")
    }

    return (
        <form onSubmit={handleSubmit(RegisterHandler)} className=' flex flex-col gap-2 w-1/2'>
        
            <input  
                {...register("UserName")}
                className=' outline-0 border-b-2 text-2xl border-white p-2' 
                type='text' placeholder='UserName'
            />
        
            <input  
                {...register("email")}
                className=' outline-0 border-b-2 text-xl border-white p-2' 
                type='email' placeholder='User Email'
            />
        
            <input  
                {...register("password")}
                className=' outline-0 border-b-2 text-xl border-white p-2' 
                type='password' placeholder='User Password'
            />
        
            <button className=' rounded border-2 mt-5 cursor-pointer border-white w-1/4 p-2 hover:border-green-400 hover:border-2 transition-all duration-200 ease-in-out'> Register User</button>
        
            <p className=' font-bold cursor-pointer'>
                Have an Account ?
                <Link className=' text-blue-300' to="/login"> Login </Link>
            </p>
        
        </form>
    )
}

export default Register