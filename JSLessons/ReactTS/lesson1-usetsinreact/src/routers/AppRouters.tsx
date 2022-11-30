import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from '../components/Nav'
import Home from '../pages/Home'
import ProductDetails from '../pages/ProductDetails'
import Products from '../pages/Products'

const AppRouters = () => {
  return (
    <BrowserRouter>
    <Nav/>
        <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/products' element={<Products/>}></Route>
            <Route path='/products/:id' element={<ProductDetails/>}></Route>
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouters