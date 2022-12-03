import React from 'react'

const SingleMovie = ({title,price}) => {
  return (
<div className="card col" >
  <div className="card-body">
    <h5 className="card-title">{title}</h5>
    <h6 className="card-subtitle mb-2 text-muted">{price}$</h6>
  </div>
</div>

   
  )
}

export default SingleMovie