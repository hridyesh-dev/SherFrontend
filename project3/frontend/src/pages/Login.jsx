import { nanoid } from 'nanoid'
import React, { use } from 'react'
import { useForm } from 'react-hook-form'
import { Link, useNavigate } from 'react-router-dom'
import { asyncLoginUser } from '../store/actions/userActions'
import { useDispatch } from 'react-redux'

const Login = () => {
    
    const dispatch = useDispatch()
    
    const {register,reset,handleSubmit}  = useForm()
    const navigate=useNavigate()
    
    const loginHandler=(user)=>{
        dispatch(asyncLoginUser(user))
        navigate("/")
        reset()
    }

    return (

        <form onSubmit={handleSubmit(loginHandler)} className=' flex  flex-col w-1/2 gap-3  '>    
            
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

            <button className='  p-3 rounded w-1/4 bg-white font-bold text-black hover:text-white hover:bg-black hover:border-2 hover:border-white transition-all duration-200 ease-in-out '> Login User </button>
            <p className=' cursor-pointer  text-lg'>Dont have an account ? <Link to="/register"  className=' text-blue-300 underline underline-offset-2 '> Reister</Link> </p>
        </form>
    )
}

export default Login