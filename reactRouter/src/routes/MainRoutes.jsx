import React from 'react'
import Home from '../components/Home.jsx'
import About from '../components/About.jsx'
import Product from '../components/Product.jsx'
import Service from '../components/Service.jsx'
import {Routes,Route} from "react-router-dom"
import ProductDetails from '../components/ProductDetails.jsx'
import ServiceDetails from '../components/ServiceDetails.jsx'
import ServiceUpdate from '../components/ServiceUpdate.jsx'

const MainRoutes = () => {
    return(
        <Routes>
            
            <Route path='/' element={<Home/>}/>
            
            <Route path='/product' element={<Product/>}/>

            {/* sibling route of products Dynamic Route - yaha name dynamic hai - yeh nye page pe khule ga  */}
            <Route path='/product/detail/:name' element={<ProductDetails/>}/>
        
            {/* More services will open below in the service page  */}
            <Route path='/service' element={<Service/>}>
                {/* This is child component of service, this will open inside service page  */}
                <Route path='/service/detail' element={<ServiceDetails/>}/>
                <Route path='/service/update' element={<ServiceUpdate/>}/>
            </Route>
            
            <Route path='/about' element={<About/>}/>
        
        </Routes>
    )
}

export default MainRoutes