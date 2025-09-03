import React, { useState } from 'react'

const App = () => {
  
  const [todos,setTodos]=useState([
    {id:1,title:"Kaam krle bhai" , isCompleted:false}
  ]);

  const [title, setTitle] = useState("")
  const [completed, setCompleted] = useState(false)
  const [gender, setGender] = useState("male")
  const [city, setCity] = useState("Mumbai")

  return (
    <div>

        <h1> CREATE TASKS </h1>

        <form>

            <input 
              onChange={(e)=>setTitle(e.target.value)}
              type='text' 
              value={title}
              placeholder='title'
            />
            
            <br/>
            <br/>

            <input
              checked={completed}
              onChange={(e)=>{setCompleted(e.target.checked)}} 
              type='checkbox'
            /> Completed
          
            <br/>
            <br/>

            <input
              value="male"
              onChange={(e)=>{setGender(e.target.value)}}
              type='radio'
              checked={gender=="male" && true}

            />Male
            
            <input
              value="female"
              onChange={(e)=>{setGender(e.target.value)}}
              type='radio'
              checked={gender=="female" && true}

            />Female
            
            <br/>
            <br/>

            <select value={city} onChange={(e)=>setCity(e.target.value)}>
              <option value="Delhi">Delhi</option>
              <option value="Mumbai">Mumbai</option>
              <option value="Kolkata">Kolkata</option>
            </select>
            <br/>
            <br/>
            <button>Create Todo</button>
        </form>
    
    </div>
  )
}

export default App
//39:00