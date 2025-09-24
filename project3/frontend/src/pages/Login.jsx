import { nanoid } from 'nanoid'
import { Link } from 'react-router-dom'

import React from 'react'
import {useForm} from "react-hook-form"
import { asyncLoginUser } from '../store/actions/userActions'
import { useDispatch } from 'react-redux'

const Login = () => {

    const {register,reset,handleSubmit} = useForm()
    const dispatch=useDispatch()

    const LoginHandler=(user)=>{
        console.log(user);
        dispatch(asyncLoginUser(user))
        reset()
    }

    return (
        <form onSubmit={handleSubmit(LoginHandler)} className=' flex flex-col gap-2 w-1/2'>

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

            <button 
                className='  mt-5 cursor-pointer border-white w-1/4 p-2 border-2 rounded
                            hover:border-blue-400 
                            hover:border-2 transition-all duration-200 ease-in-out '
            >
                Login User
            </button>
            
            <p className=' font-bold cursor-pointer'>
                Dont Have an Account ?
                <Link className=' text-blue-300' to="/register"> Register</Link>
            </p>
        
        </form>
    )
}

export default Login