import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import User from './User'

const Nav = () => {
    const [log,setLog] = useState(false);
  return (
        <nav className="navbar navbar-expand-lg bg-dark navbar-dark">
        <div className="container-fluid">
            <Link className="navbar-brand" to="/">Logo</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <NavLink className="nav-link active"  to="/">Home</NavLink>
                </li>
                <li className="nav-item">
                <NavLink className="nav-link" to="/products">Products</NavLink>
                </li>
               
            </ul>
            <div className="d-flex" role="search">
                <User username='Hasan' messageCount={30} isLoggedIn={log} />
                <button className='btn btn-primary' onClick={()=>{setLog(log === false ? true: false ) }}>  login</button>
               
            </div>
            </div>
        </div>
        </nav>

  )
}

export default Nav