import React from 'react'
import { useState } from 'react';
import { createContext } from 'react'
import moviedata from '../data/moviedata'

export const MovieContext = createContext();

export const MovieProvider = props => {
    const [movies,setMovies] = useState(moviedata);
  return (
    <MovieContext.Provider value={[movies,setMovies]}>
        {props.children}
    </MovieContext.Provider>
  )
}

