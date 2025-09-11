import React from 'react'

const Read = (props) => {
    
    const todos=props.todos;
    //const settodos=props.settodos

    //inline css
    const renderTodos=todos.map((todo)=>{
        return(
            <li style={{color:todo.isCompleted?"green":"tomato"}} key={todo.id}>{todo.title}</li>
        )
    })


    return (
        <>
            <h1 style={{color:"green"}}> My Tasks</h1>
            <ol>{renderTodos}</ol>
        </>
    )
}

export default Read