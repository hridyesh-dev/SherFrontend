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
    const buttoncss={
        color:"white",
        padding:"5px 10px",
        border:"darkblue 4px solid ",
        borderRadius:"3px",
        backgroundColor:"black"
    }

    
    return (
        <>
            <h1>CREATE TASKS</h1>
            
            {/* INPUT FORM */}
            <form onSubmit={SubmitHandler}>
            
                {/* Normal Input */}
                <input 
                    onChange={(e)=>settitle(e.target.value)}
                    value={title}
                    type="text" 
                    placeholder="title" 
                />

                <button style={buttoncss}>Create Todo</button>

            </form>
        </>
    )
}

export default Create