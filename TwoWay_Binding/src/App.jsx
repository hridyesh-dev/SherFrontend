import React from 'react'
import { useState } from 'react'

const App = () => {
  const [users, setusers] = useState([
    {name:'John',age:12},
    {name:'Ankur',age:23},
    {name:'Ayush',age:22}
  ])

  const [fullName, setfullName] = useState("")
  const [age, setAge] = useState(18)

  const renderUser=users.map((user,index)=>{
    return(
      <li key={index}>{user.name}</li>
    )
  })

  const SubmitHandler=(event)=>{
    event.preventDefault()
    const newUser={fullName,age}
    console.log(newUser); 
    /*
      iss data ko bhejo api mai , 
      backend mai , DB mai 
    */
    console.log("Form Submit");

  }

  // const changeHandler=(e)=>{
  //   setfullName(e.target.value);
  // }

  // const changeHandlerAge=(e)=>{
  //   setAge(e.target.value);
  // }

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

      <hr></hr>

      <h1>User Data</h1>
      
      <ol>{renderUser}</ol>
    
    </div>
  )
}

export default App