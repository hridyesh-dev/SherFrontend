import React from 'react'
import Nav from './components/Nav.jsx'
import MainRoutes from './routes/MainRoutes.jsx'
const App = () => {
  return (
    
    <div className=' w-screen  h-screen  bg-gray-950 text-white'>
      <Nav/>
      <MainRoutes/>
    </div>
  )
}

export default App