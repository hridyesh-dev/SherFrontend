import React from 'react'
import { useState } from 'react'
import Create from './Components/Create'
import Read from './Components/Read'

const App = () => {
  //yeh dono jagah use hoga in create and read
  const [users, setusers] = useState([
    {name:'John',age:12},
    {name:'Ankur',age:23},
    {name:'Ayush',age:22}
  ])

  return (
    <div>
      <Create />
      <hr/>
      <Read users={users} setusers={setusers} />
    </div>
  )
}

export default App