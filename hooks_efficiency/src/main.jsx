import { createRoot } from 'react-dom/client'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  // App() : WE CANT do this since it is jsx it wont be efficient
  // jsx style mai function ka call hai yeh 
  //self closing tag : iske beech mai koi content hai nahi 

  <App/>
)
