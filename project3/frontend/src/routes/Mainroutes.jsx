import React from 'react'
import { Route, Routes } from 'react-router-dom'

import Products from '../pages/Products'
import Login from '../pages/Login'
import Register from '../pages/Register'
import PageNotFound from "../pages/PageNotFound"
import CreateProduct from '../pages/admin/CreateProduct'
import ProductDetails from '../pages/admin/ProductDetails'
import UserProfile from '../pages/user/UserProfile'
import AuthWrapper from "./AuthWrapper.jsx";
const Mainroutes = () => {


    return (
        <div className=' '>
            <Routes>
                <Route path='/' element={<Products/>}/>
                
                {/* 
                    Non Authenticated Route :  If user is loged in the it shoudn't have the access to these routes
                    if user is not logged in then these routes should be visible
                */}
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                
                {/* 
                    Authenticates Routes :  If user is not loged in the it shoudn't have the access to these routes
                    Agar banda logged in hai then these routres should be visible
                */}
                
                <Route path='/admin/create-product' element={
                    <AuthWrapper>
                        <CreateProduct/>
                    </AuthWrapper>
                }/>
                    
                <Route path='/admin/user-profile' element={
                    <AuthWrapper>
                        <UserProfile/>
                    </AuthWrapper>
                }/>
                
                <Route path='/product/:id' element={
                    <AuthWrapper>
                        <ProductDetails/>
                    </AuthWrapper>
                }/>
                
                
                <Route path='*' element={<PageNotFound/>}/>
                
            </Routes>
        </div>
    )
}

export default Mainroutes