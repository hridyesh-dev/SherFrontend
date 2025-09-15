
import React, { useState } from 'react'
import Read from './components/Read';
import Create from './components/Create';

const App = () => {

  return (
    <div className='  flex w-screen h-screen p-10 bg-zinc-950'>
      <Create/>
      <hr></hr>
      <Read/>
    </div>

  )
}


export default App