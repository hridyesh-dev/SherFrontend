import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Recipes from '../pages/Recipes'
import Create from '../pages/Create'

const Mainroutes = () => {
  return (
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/recepies' element={<Recipes/>}/>
        <Route path='/create-recepie' element={<Create/>}/>
        <Route path='/about' element={<About/>}/>
    </Routes>
  )
}

export default Mainroutes