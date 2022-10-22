import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "../pages/About";
import Contact from "../pages/Contact";
import Home from "../pages/Home";
import NotFoundPage from "../pages/NotFoundPage";
import Nav from '../components/Nav';
import Footer from '../components/Footer';
export class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="*" element={<NotFoundPage />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default AppRouter;
