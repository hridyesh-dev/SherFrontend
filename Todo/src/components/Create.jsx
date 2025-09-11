import React , {useState} from 'react'
import { nanoid } from 'nanoid';

const Create = (props) => {
    
    const todos=props.todos;
    const settodos=props.settodos

    const [title, settitle] = useState("")
        
    //button submit handler
    const SubmitHandler=(e)=>{
        e.preventDefault();
        //id ke liye we will use nanoID 
        const newTodo={
            id : nanoid(), //nano id generating the random id
            title,
            isCompleted : true
        }
    
        //seeing new value
        console.log(newTodo);
    
        /*
        
        //copying the orignal data 
        let copyTodo=[...todos]  
        
        //pushing new data into copy
        copyTodo.push(newTodo)
        
        //updating value of orignal todo
        settodos(copyTodo)
        
        console.log(todos);
        */

        settodos([...todos,newTodo])
        settitle("")

    }
    
    //internal css
    // const buttoncss={
    //     color:"white",
    //     padding:"5px 10px",
    //     border:"darkblue 4px solid ",
    //     borderRadius:"3px",
    //     backgroundColor:"black"
    // }

    
    return (
        <div className=' w-[60%] mx-auto border p-10  text-white'>
            <h1 className=' cursor-pointer mb-10 text-5xl text-thin '>Set<span className=' text-red-500 font-light hover:underline transition-all ease-in  '>Reminders</span><br></br>  For Tasks</h1>
            
            {/* INPUT FORM */}
            <form onSubmit={SubmitHandler}>
            
                {/* Normal Input */}
                <input className=' font-thin border-b-2 outline-0 w-[70%] text-2xl '
                    onChange={(e)=>settitle(e.target.value)}
                    value={title}
                    type="text" 
                    placeholder="title" 
                />

                <button className=' ml-5 text-xl px-5 rounded-2xl py-2 border-white border-2 hover:bg-emerald-800  transition-all ease-in'>Create Todo</button>

            </form>
        </div>
    )
}

export default Create