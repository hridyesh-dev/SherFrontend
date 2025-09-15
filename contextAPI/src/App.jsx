import React from 'react'
import { createContext } from 'react'
import ChildA from './components/ChildA';
import { useState } from 'react';
import './App.css'
//step 1 : context create karo 
//export const UserContext=createContext();
  export const themeContext=createContext();

//step 2 : wrap all the child inside the provider 
// hrr uss component ko jisko humm data bhejna chahte hai usse provider mai wrap krr do

//step3: pass value 
//step4: consumer ke andar jaake value use karo 
const App = () => {
  
  // const [user,setUser]=useState({name:"Hri"})
  const [theme,setTheme]=useState("light")
  
  return (
    
    // <UserContext.Provider value={user}>
    //   <ChildA/>
    // </UserContext.Provider>

    <themeContext.Provider value={{theme,setTheme}}>
      <div id='container' style={{backgroundColor:theme==='light'?"beige":"black"}}>
        <ChildA/>
      </div>
    </themeContext.Provider>

  )
}

export default App