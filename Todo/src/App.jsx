
import React, { useState } from 'react'
import Read from './components/Read';
import Create from './components/Create';

const App = () => {

  //todo list ka data ave arna hai 
  const [todos, settodos] = useState([
    {id:1 , title:"Kaam krr le bhai" ,isCompleted:false},
  ]);

  console.log(todos);

  return (
    <div>
      <Create todos={todos} settodos={settodos} />
      <hr></hr>
      <Read todos={todos} settodos={settodos} />
    </div>

  )
}


export default App