import React from 'react'
import './App.css'
import Mainroutes from './routes/Mainroutes'
import Navbar from './components/Navbar'
const App = () => {
  return (
    <div className=' overflow-x-hidden overflow-y-scroll py-10 px-[20%] w-screen h-screen  bg-black font-normal text-white'>
      <Navbar/>
      <Mainroutes/>
    </div>
  )
}

export default App 