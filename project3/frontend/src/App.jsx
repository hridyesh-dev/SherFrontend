import React from 'react'
import axios from './api/axiosconfig'
import { useEffect } from 'react';
import {asyncgetusers} from './store/userAction'
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  
  // data access karne ke liye we make use of useSelector hook 
  // we are accessing the data with the help of useSelector hook 
  const data = useSelector((state)=>state);

  console.log(data);

  //actions call nahi hote dispatich hote hai 
  const dispatch=useDispatch()

  useEffect(()=>{
    dispatch(asyncgetusers())
  },[])

  return (
    <div>App</div>
  )
}

export default App