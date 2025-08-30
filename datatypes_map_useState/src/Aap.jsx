import React, { useState } from 'react'

const Aap = () => {

    //use state is like the variable given by react 
    // variable name , setterFunction and default value
    const [username,setUsername] = useState("Hridyesh")

    const ChangeHandler=()=>{
        //changing values with the help of setter function
        setUsername("RAM RAM")
    }
    console.log(username);

    //when we need to apply changes on the view  
    //react ko batana voh bataye ga apne Virtual DOM KO 
    //firr then its compaired and applied on the browser 

    return (
        <div>
            <h1>Username</h1>
            <h2>{username}</h2>
            <button onClick={ChangeHandler}>CHANGE NAME</button>

        </div>
    )
}

export default Aap