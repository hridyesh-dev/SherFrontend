import React from 'react'
import Home from '../components/Home.jsx'
import About from '../components/About.jsx'
import Product from '../components/Product.jsx'
import Service from '../components/Service.jsx'
import {Routes,Route} from "react-router-dom"
import ProductDetails from '../components/ProductDetails.jsx'

const MainRoutes = () => {
    return(
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/product' element={<Product/>}/>
            {/* Child route of products Dynamic Route - yaha name dynamic hai  */}
            <Route path='/product/detail/:name' element={<ProductDetails/>}/>
            <Route path='/service' element={<Service/>}/>
            <Route path='/about' element={<About/>}/>
        </Routes>
    )
}

export default MainRoutes