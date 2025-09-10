import React from 'react'

const App = () => {
  
  let n = 12;//this is number 
  
  let s = "String";
  
  // we cant see boolean, used for comparison , condition but cant be seen in view 
  let b = true
  
  // we also cant see null and undefined values 
  //kyuki yeh sab are reserved keywords 
  let nu = null;
  
  let un = undefined
  
  let arr=[<h1>Heyyy</h1>,12,"Hello",null,true,undefined,"Hi"]
  
  let obj={name:"Hridyesh",age:21}
  
  return (
    <div>
      <h1>Datatypes</h1>
      <h2>Number : {n}</h2>
      <h2>String : {s}</h2>
      <h2>Boolean : {b ? "Hello":"Bye"}</h2>
      <h2>NULL : {nu}</h2>
      <h2>Undefined : {un}</h2>
      {/* 
          Array ki voh values dikhe gi which are non null , 
          undefined or boolean only strings and numbers will 
          be shown and that too in concatinated format  
      */}
      <h2>Array : {arr}</h2>
      {/* Cant see object directly */}
      <h2>Object:{obj.name + obj.age}</h2>

    </div>
  )
}

export default App