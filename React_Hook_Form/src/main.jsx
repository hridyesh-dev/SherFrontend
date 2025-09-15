import './index.css'
import { createRoot } from 'react-dom/client'
import {ToastContainer} from "react-toastify"

import App from './App.jsx'
import Wrapper from './components/Wrapper.jsx'

createRoot(document.getElementById('root')).render(
  <Wrapper>
    <App/>
    <ToastContainer position='top-right'/>
  </Wrapper>
)
