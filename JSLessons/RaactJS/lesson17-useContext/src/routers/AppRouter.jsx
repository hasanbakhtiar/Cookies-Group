import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Nav from '../components/Nav'
import { MovieProvider } from '../context/MovieContext'
import AddMovies from '../form/AddMovies'
import Home from '../pages/Home'
import MovieList from '../pages/MovieList'

const AppRouter = () => {
  return (
    <BrowserRouter>
    <MovieProvider>
    <Nav />
    <div className="container">
    <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/movies' element={<MovieList />}></Route>
        <Route path='/add' element={<AddMovies />}></Route>
    </Routes>
    </div>
    </MovieProvider>
    
    </BrowserRouter>
  )
}

export default AppRouter