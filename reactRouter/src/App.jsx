import React from 'react'
import Home from './components/Home.jsx'
import About from './components/About.jsx'
import Product from './components/Product.jsx'
import Service from './components/Service.jsx'
import {Routes,Route} from "react-router-dom"
import Nav from './components/Nav.jsx'
const App = () => {
  return (
    
    <div className=' w-screen  h-screen  bg-gray-950 text-white'>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/product' element={<Product/>}/>
        <Route path='/service' element={<Service/>}/>
        <Route path='/about' element={<About/>}/>
      </Routes>
    </div>
  )
}

export default App