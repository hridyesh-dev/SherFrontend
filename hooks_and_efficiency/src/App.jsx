import React from 'react'
import { Fragment } from 'react'

const App = () => {

  //js ka logic idhar likhe ge 
  const handleClick=(event)=>{
    alert("Button Clicked")
  }

  const handleParamClick=(msg)=>{
    alert(msg)
  }

  // const wrapperHandler = () => {handleClick("RAM RAM ")}

  return (
    <>
    
      <h1>{2 + 3}</h1>
      <div> App </div>
      <div> Hello </div>
      
      {/* 
        We just pass function refrence and do not call them 
        iss function ke refrence ko onclick call krr dega jab event hoga
      */}
      <button onClick={handleClick} >Click</button>
      
      <br></br>
      
      {/* Parameterised button : parameterised function call inside an anonymous arrow function */}
      <button onClick={()=>handleParamClick("Ram Ram")} >
        Parameterised Click
      </button>
    
    </>
  )
}

export default App