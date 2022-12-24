import React from 'react'
import { Link } from 'react-router-dom'

const SingleCard = ({photo,title,desc,id}) => {
  return (
    <div className='col-12 col-sm-6 col-md-4'>
            <div className="card" >
            <img height={300} src={photo} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{title.substring(0,10)}</h5>
                <p className="card-text">{desc.substring(0,30)}</p>
                <Link to={`/${id}`} className="btn btn-primary">Read More</Link>
            </div>
            </div>

    </div>
  )
}

export default SingleCard