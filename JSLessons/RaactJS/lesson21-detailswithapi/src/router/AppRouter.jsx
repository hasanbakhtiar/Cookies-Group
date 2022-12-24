import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Product from '../components/Product'
import ProductDetails from '../components/ProductDetails'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path='/' element={<Product/>}></Route>
            <Route path='/:id' element={<ProductDetails/>}></Route>
        </Routes>
    
    </BrowserRouter>
  )
}

export default AppRouter