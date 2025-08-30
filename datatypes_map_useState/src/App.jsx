import React from 'react'

const App = () => {
  let n=12;
  let s="Hello World";
  let b=true;
  let nu=null;
  let u=undefined;
  //string,number,jsx,bool, sab pass krr sakte ho
  let arr=[<h1>Hey</h1>,"Heelo",12,true,null,undefined,"hi"]
  let obj={
    name:"Hri",
    age:21
  }
  return (

    <div>

      <h1>HOW Datatypes LOOK IN VUE</h1>
      <h2> Number : {n} </h2>
      <h2> String : {s} </h2>
      <h2> Bool : {b ? "Hello" : "Not Hello" } </h2>
      // these are reserved keywords of JS These cant be seen on vue
      <h2> Null : {nu}</h2>
      <h2> Undefined : {u}</h2>
      <h2> ARRAY : {arr}</h2> //ONLY NUMBERS AND STRINGS ARE visible as concatinated
      <h2> Obj : {obj.age} | {obj.name}</h2> //ONLY NUMBERS AND STRINGS ARE visible as concatinated

    </div>
  )
}

export default App

