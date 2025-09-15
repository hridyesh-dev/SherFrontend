import React , {useState,useContext} from 'react'
import {useForm} from "react-hook-form"
import { nanoid } from 'nanoid';
import { toast } from 'react-toastify';
import { todoContext } from './Wrapper';

const Create = () => {
    
    const [todos,settodos]=useContext(todoContext)

    const {
        register, //two way binding
        handleSubmit, //submit handler
        reset, //form ko reset karne ke liye
        formState:{errors} //to find errors 
    } = useForm()

        
    //button submit handler
    const SubmitHandler=(data)=>{
        
        data.isCompleted=false;
        data.id=nanoid();

        //seeing new value
        console.log(data);

        const copytodos=[...todos]
        copytodos.push(data)
        settodos(copytodos)

        toast.success("Task Created")
        reset();
        
        
    }
    


    
    return (
        <div className=' w-[60%] mx-auto border p-10  text-white'>
            <h1 className=' cursor-pointer mb-10 text-5xl text-thin '>Set<span className=' text-red-500 font-light hover:underline transition-all ease-in  '>Reminders</span><br></br>  For Tasks</h1>
            
            {/* INPUT FORM */}
            <form onSubmit={handleSubmit(SubmitHandler)}>
            
                {/* Normal Input */}
                <input 
                    {...register("title",{required:"Title cannot be empty"})}
                    className=' font-thin border-b-2 outline-0 w-[70%] text-2xl '
                    type="text" 
                    placeholder="title" 
                />
                <br/>
                {/* agar error hai and uske andar agar title hai and agar uske andar message hai */}
                <small className=' text-red-400 font-thin'>{errors?.title?.message}</small>
                <br/>
                <button className='  text-xl px-7 rounded-lg py-2 border-white border-2 hover:bg-emerald-800  transition-all ease-in'>Create Todo</button>

            </form>
        </div>
    )
}

export default Create