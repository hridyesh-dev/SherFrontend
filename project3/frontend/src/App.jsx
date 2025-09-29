import axios from './api/axiosconfig';
import React, { useEffect} from 'react'
import { asyncGetUsers } from './store/userActions';
import {useDispatch,useSelector} from "react-redux"
const App = () => {
  // MAI MAI USE SELECTOR IS ACCESSING THE DATA 
  const data=useSelector((state=>state))
  const dispatch=useDispatch()
  console.log("final data : ",data);

  //ACTION KO APP CALL KRR RAHA HAI 
  useEffect(()=>{
    dispatch(asyncGetUsers())
  },[])
  
  return (

    <div>
      App
    </div>
  )
}

export default App