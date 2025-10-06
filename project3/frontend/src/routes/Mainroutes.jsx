import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Products from '../pages/Products'
import Login from '../pages/Login'
import Register from '../pages/Register'
import { useSelector } from 'react-redux'
import CreateProduct from '../pages/admin/CreateProduct'
import ProductDetails from '../pages/admin/ProductDetails'
import UserProfile from '../pages/user/UserProfile'

const Mainroutes = () => {

    const user = useSelector((state) => state.userReducer.users);

    return (
        <div className=' '>
            <Routes>
                <Route path='/' element={user?<Products/>:<Home/>}/>
                <Route path='/login' element={<Login/>}/>
                <Route path='/register' element={<Register/>}/>
                
                <Route 
                    path='/admin/create-product' 
                    element={<CreateProduct/>}
                />
                <Route 
                    path='/admin/user-profile' 
                    element={<UserProfile/>}
                />
                
                <Route 
                    path='/product/:id' 
                    element={<ProductDetails/>}
                />
                
            </Routes>
        </div>
    )
}

export default Mainroutes