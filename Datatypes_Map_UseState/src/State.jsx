import React from 'react'
import { useState } from 'react'

const State = () => {
    //React ka variable 
    let [username,setUserName]=useState("Hridyesh")
    
    console.log(username);
    
    const ChangeHandler=()=>{
        setUserName("Ram")
    }   
    console.log(username);

    return (
        <div>
            <h1>Username : </h1>
            <h2>{username}</h2>
            <button onClick={ChangeHandler}>Change Name</button>
        </div>
    )
}

export default State