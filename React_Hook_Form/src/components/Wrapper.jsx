import React, { createContext , useState } from 'react'
// takes component as prop and will return same with extra functionality
// data wrapper mai rakhe ge aur children mai kahi se bhi access krr denge 

//context universal data ko hold karta hia 
//context banao export karo 
//wrap it around children with value 
export const todoContext=createContext(null)

const Wrapper = (props) => {
    
    //todo list ka data ave arna hai 
    //universal data jo puri application mai failana hai 
    const [todos, settodos] = useState([
        {id:1 , title:"Kaam krr le bhai" ,isCompleted:false},
    ]);
    console.log(props);

    return (
        <todoContext.Provider value={[todos, settodos]}>
            {props.children}
        </todoContext.Provider>
    )
}

export default Wrapper