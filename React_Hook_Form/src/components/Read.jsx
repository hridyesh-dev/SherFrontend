import React, { useContext } from 'react'
import "./Read.css"
import { toast } from 'react-toastify';
import { todoContext } from './Wrapper';
const Read = () => {
    
    // useContext se context use  krr sakte hai
    //aise context kaam karta hai 
    //jo value pass ki hai usse nikala  
    const [todos,settodos]=useContext(todoContext)


    //delete stuff using id 
    const DeleteHandler = (id)=>{
        console.log("Delete pressed");
        console.log(id);
        //filter on base of ID 
        //filter data on the bases of some condition
        //jiski id match krr rahi hai usse remove krr do 
        const filteredTodo = todos.filter(todo=>todo.id!=id)
        settodos(filteredTodo)
        toast.error("Item Deleted ")
    }
    
    const renderTodos=todos.map((todo)=>{
        return(
            <li className=' flex justify-between items-center  bg-zinc-800 p-4 mb-7 text-green-400 hover:border-2 hover:border-white transition-all ease-in shadow-xs hover:shadow-white' key={todo.id}>  {/* Jab delete pe click karu ga toh yeh delete ho jaana chahiye */}
                <span>{todo.title} </span>
                
                <button
                    className="border-2 font-thin border-red-500 bg-transparent px-5 rounded-lg text-red-500 hover:bg-red-500 hover:text-black hover:font-bold transition-colors duration-200"
                    onClick={() => DeleteHandler(todo.id)}
                >
                    Done
                </button>

            </li>
        )
    })


    return (
        <div className=' border-white border-2 text-white p-10 w-[40%]'>
            <h1 className=" mb-10 text-5xl font-thin" > <span className=' text-violet-600'>Pending</span> Tasks</h1>
            <ol>{renderTodos}</ol>
        </div>
    )
}

export default Read


/*

    filter example
    data=[q,q,q,q,q,q,q,r]
    x=data.filter(d=>d==q) : q ko de do
    y=data.filter(d=>d!=q) : q ko nahi do
    output : x=[q,q,q,q,q,q,q]
            y=[r]

*/
//inline css , internal css , tailwind 