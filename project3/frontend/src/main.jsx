import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
//store nikal lo
import { store } from './store/store.jsx'
//Provider le lo from redux
import { Provider } from 'react-redux'

import {BrowserRouter} from "react-router-dom"
// wrap the whole application with redux tool kit 

createRoot(document.getElementById('root')).render(
  
  <BrowserRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </BrowserRouter>  

)
