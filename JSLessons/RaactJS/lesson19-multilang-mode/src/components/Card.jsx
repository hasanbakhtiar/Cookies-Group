import React from 'react'

const Card = ({title,desc,price}) => {
  return (
    <>
            <div className="card" style={{width: '18rem'}}>
            <ul className="list-group list-group-flush">
                <li className="list-group-item">{title}</li>
                <li className="list-group-item">{desc}</li>
                <li className="list-group-item">{price}</li>
            </ul>
            </div>

    </>
  )
}

export default Card