import React, { useState } from 'react'

const App = () => {

  //todo list ka data ave arna hai 
  const [todos, settodos] = useState([
    {id:1 , title:"Kaam krr le bhai" ,isCompleted:false},
  ]);

  const [title, settitle] = useState("")
  const [completed, setCompleted] = useState(false)
  const [gender, setGender] = useState("male")
  const [city, setCity] = useState("mumbai")
  
  return (
    <div>
        <h1>CREATE TASKS</h1>
        <form>
        
            {/* Normal Input */}
            <input 
              onChange={(e)=>settitle(e.target.value)}
              value={title}
              type="text" 
              placeholder="title" 
              />


            {/* CheckBox */}
            <input
              checked={completed}
              onChange={(e)=>setCompleted(e.target.checked)}
              type="checkbox" 
            />Completed
            
            <br></br><br></br>

            <input 
              value="male"
              onChange={(e)=>setGender(e.target.value)}
              type="radio"
              checked={gender=="male" && true}
              />Male

            <input 
              value="female"
              onChange={(e)=>setGender(e.target.value)}
              checked={gender=="female"&& true }
              type="radio"
              />Female

            <br></br><br></br>
            
            <select value={city} onChange={(e)=> setCity(e.target.value)}>
              <option value="delhi" >Delhi</option>
              <option value="mumbai" >Mumbai</option>
              <option value="kolkata" >Kolkata</option>
            </select>
            
            <br></br><br></br>
            
            <button>Create Todo</button>

        </form>
    </div>
  )
}

export default App