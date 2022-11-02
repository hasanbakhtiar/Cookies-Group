import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import ProductList from "../pages/ProductList";
import Cart from "../pages/Cart";
import Nav from "../components/Nav";
import { CartProvider } from "react-use-cart";
const AppRouter = () => {
  return (
    <BrowserRouter>
      <CartProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/products" element={<ProductList />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
};

export default AppRouter;
