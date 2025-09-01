import React, { useState } from 'react'
import Create from './Components/Create';
import Read from './Components/Read';

const App = () => {
  

  const [users,setUsers]=useState([
    { name : "John" , age:12 },
    { name : "Akash" , age:21 },
    { name : "Anuj" , age:13 }
  ]);

  return (
    <div>
        
        <Create/>
        <hr />
        {/* Props ke zariye parent se data bhejna */}
        <Read users={users} setUsers={setUsers} />
        

    
    </div>
  )
}

export default App

