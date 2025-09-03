import React from 'react'

const App = () => {
  
  // js ka logic idhr likh sakte hai
  //non-parameterised function 
  const handleClick=()=>{
    alert("Button Clicked")
  }
  
  const handleParamClick=(msg)=>{
    alert(msg)
  }

  //jab yeh function call hoga parameterised function call hoga 
  //ek wrapper function bana lo and uske through call krr do 
  const wrapperHandler=()=>{
    handleParamClick("ram ram")
  }

  return (
    <>
      
      {/* curly brackets ke andar voh code likho that we want to execute */}
      
      <h1>{ 2 + 3 }</h1>
      
      <div>App</div>
      
      <div>Hello</div>
      
      {/* yaha sirf function ka naam bhejna hai call nahi  karna hai */}
      <button onClick={handleClick}>
        CLICK
      </button>
      
      {/* 
          yaha toh call karna padega kyuki uske bina parameter kaise bheje ge
          to solve this problem wrap this around a wraperHandler

          or we can directly pass the arrow function voh tabh call karega jab banda click karega 
      */}
      
      {/*<button onClick={wrapperHandler}>CLICK(param)</button>*/}
      <button onClick={()=>handleParamClick("ram ram")}>
        CLICK(param)
      </button>

    </>
  )
}

export default App

// function call is replaced by its return value 
// a function component will always return jsx
//can not write anything in return 
// we can only return sigle data/value/variable/entetity
//there must be single return in a function ad that must be the last statement 
