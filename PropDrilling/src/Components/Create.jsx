import React from 'react'
import { useState } from 'react';

const Create = (props) => {
    
    console.log(props);
    const [fullName, setfullName] = useState("")
    const [age, setAge] = useState(18)
    
    const SubmitHandler=(event)=>{
        event.preventDefault()
        const newUser={fullName,age}
        console.log(newUser); 
        

        console.log("Form Submit");
    }
    
    
    return (
        <div>
            <h1>Register User </h1>
            {/* Button pe click karo form submit hota hai  */}
            <form onSubmit={SubmitHandler}>

                <input 
                    onChange={(e)=>setfullName(e.target.value)}
                    type='text' 
                    placeholder='Full Name'
                    value={fullName}
                />

                <input 
                    onChange={(e)=>setAge(e.target.value)}
                    type='number' 
                    placeholder='Age'
                    value={age}
                />

                <button >Submit</button>

            </form> 
        </div>
    )
}

export default Create