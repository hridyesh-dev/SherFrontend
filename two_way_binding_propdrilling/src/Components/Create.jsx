//CREATE FUNCTIONALITY KA CODE 

import { useState } from "react";


const Create = (props) => {
    
    console.log(props);
    const [fullname,setFullName]=useState("")
    const [age,setAge]=useState(18)
    
    const submitHandler=(event)=>{
        //to prevent the default behaviour which happens on form submit , 
        //form refresh nahi hoga 
        event.preventDefault()
        const newUser={fullname,age}
        console.log("Form Submit");
        //iss data ko api mai , backend mai , db mai bheje ge 
        // react mai data save karne ka matlb : useState mai save karna : kyu karna? : form submit mai data 
        // backend mai bhej denge fir save ho jaaye ga 
        console.log(newUser);
    }

    return (
        <div>
                    
            <h1>REISTER USER</h1>
            
            <form onSubmit={submitHandler} >  
            <input 
                onChange={(event)=>{setFullName(event.target.value)}} 
                type="text" 
                value={fullname} placeholder= " FULL NAME "
            />

            <input 
                onChange={(event)=>{setAge(event.target.value)}} 
                type="text" value={age} 
                placeholder=' AGE '
            />

            <button>Submit</button>
            
            </form>
            
        </div>
    )
}

export default Create