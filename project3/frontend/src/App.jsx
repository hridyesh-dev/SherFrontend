import React from 'react'
import axios from './api/axiosconfig'
import { useEffect } from 'react';
import {asyncgetusers} from './store/userAction'
const App = () => {
  

  useEffect(()=>{
    asyncgetusers()
  },[])

  return (
    <div>App</div>
  )
}

export default App