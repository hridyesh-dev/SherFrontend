import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import Wrapper from './Components/Wrapper.jsx'

createRoot(document.getElementById('root')).render(
  <Wrapper info="hello" App={<App/>} />
)
