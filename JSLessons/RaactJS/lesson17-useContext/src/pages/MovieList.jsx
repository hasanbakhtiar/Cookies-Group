import React, { useContext } from 'react'
import SingleMovie from '../components/SingleMovie'
import { MovieContext } from '../context/MovieContext'

const MovieList = () => {
  const [movies,setMovies] = useContext(MovieContext)

  return (
    <div className='row'>
      {movies.map((fd)=>(
        <SingleMovie title={fd.title} price={fd.price}/>
      ))}
    </div>
  )
}

export default MovieList