
import { nanoid } from 'nanoid'
import React from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch} from "react-redux"
import { asyncRegisterUser } from '../store/actions/userActions'

const Register = () => {
    
    const {register,reset,handleSubmit}  = useForm()

    const dispatch = useDispatch()
    
    const navigate=useNavigate()

    const registerHandler=(user)=>{
        user.id=nanoid();
        user.isAdmin=false;
        user.cart=[];
        console.log(user);
        dispatch(asyncRegisterUser(user))
        navigate("/login")
        reset()
    }

    return (
        <form onSubmit={handleSubmit(registerHandler)} className=' flex  flex-col w-1/2 gap-3  '>
            
            <input 
                {...register("userName")}
                className=' text-2xl outline-0 border-b p-2 ' 
                type='text' placeholder='Username'
            />

            <input 
                {...register("email")}
                className=' text-2xl outline-0 border-b p-2 ' 
                type='email' placeholder='Email'
            />

            <input 
                {...register("password")}
                className=' text-2xl outline-0 border-b p-2 ' 
                type='password' placeholder='Password'
            />

            <button className='  p-3 rounded w-1/4 bg-white font-bold text-black hover:text-white hover:bg-black hover:border-2 hover:border-white transition-all duration-200 ease-in-out '> Register User </button>
            <p className=' cursor-pointer  text-lg'>Already have an account ? <Link to="/login"  className=' text-blue-300 underline underline-offset-2 '> Login </Link> </p>
        </form>
    )
}

export default Register