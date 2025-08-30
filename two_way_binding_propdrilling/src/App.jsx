import React, { useState } from 'react'

const App = () => {
  
  const [fullname,setFullName]=useState("")
  const [age,setAge]=useState(18)

  const [users,setUsers]=useState([
    { name : "John" , age:12 },
    { name : "Akash" , age:21 },
    { name : "Anuj" , age:13 }
  ]);

  const renderUser=users.map((user,index)=>{
    return <li key={index}> 
              {user.name}
            </li>
  })

  // const changeHandler=(event)=>{
  //   //react ko pata chal gaya
  //   setFullName(event.target.value);
  // }

  const submitHandler=(event)=>{
    //to prevent the default behaviour which happens on form submit , 
    //form refresh nahi hoga 
    event.preventDefault()
    const newUser={fullname,age}
    console.log("Form Submit");
    console.log(newUser);//iss data ko api mai , backend mai , db mai bheje ge 
    console.log(users);
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
        
        <hr />
        
        <h1>USER DATA</h1>
        
        <ol>{renderUser}</ol>
    
    </div>
  )
}

export default App

//40:16