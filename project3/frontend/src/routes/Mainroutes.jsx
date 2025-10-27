import React, { lazy } from 'react'
import { Route, Routes } from 'react-router-dom'

const Products=lazy(()=>import("../pages/Products.jsx"))
const Login=lazy(()=>import("../pages/Login.jsx"))
const Register=lazy(()=>import("../pages/Register.jsx"))
const CreateProduct=lazy(()=>import("../pages/admin/CreateProduct.jsx"))
const ProductDetails=lazy(()=>import("../pages/admin/ProductDetails.jsx"))
const AuthWrapper=lazy(()=>import("./AuthWrapper.jsx"))
const UserProfile=lazy(()=>import("../pages/user/UserProfile.jsx"))
const PageNotFound=lazy(()=>import("../pages/PageNotFound.jsx"))
const Cart=lazy(()=>import("../pages/Cart.jsx"))

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

                <Route path='/cart' element={
                    <AuthWrapper>
                        <Cart/>
                    </AuthWrapper>
                }/>
                
                
                <Route path='*' element={<PageNotFound/>}/>
                
            </Routes>
        </div>
    )
}

export default Mainroutes