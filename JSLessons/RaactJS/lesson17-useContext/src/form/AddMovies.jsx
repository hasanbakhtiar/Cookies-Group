import React from 'react'
import { useContext } from 'react';
import { useState } from 'react'
import { useNavigate } from "react-router-dom";
import { MovieContext } from '../context/MovieContext';
const AddMovies = () => {
    const [title,setTitle] = useState("");
    const [price,setPrice] = useState("");
    const [movies,setMovies] = useContext(MovieContext);

    const updateTitle = (e)=>{
        setTitle(e.target.value)
    }
    const updatePrice = (e)=>{
        setPrice(e.target.value)
    }
    const navigate = useNavigate();
    const addMovie=(e)=>{
        e.preventDefault();
       setMovies(prevMovies=>[...prevMovies,{title:title,price:price}]);
       navigate('/movies');
       
    }
  return (
<form className='container' onSubmit={addMovie}>
  <div className="mb-3">
    <label  className="form-label">title</label>
    <input onChange={updateTitle} type="text" className="form-control"  />
  </div>
  <div className="mb-3">
    <label  className="form-label">price</label>
    <input onChange={updatePrice} type="text" className="form-control" />
  </div>

  <button type="submit" className="btn btn-primary">add</button>
</form>

  )
}

export default AddMovies