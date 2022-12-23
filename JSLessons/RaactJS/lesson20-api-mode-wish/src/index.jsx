import React, {  useState } from 'react';
import ReactDOM from 'react-dom/client';
import './style/bootstrap.min.css'
import CardList from './components/CardList';



const Nav=()=>{
  const [mode,setMode]= useState(localStorage.getItem('mode'));

  return(
          <nav className={`navbar navbar-expand-lg bg-${mode} navbar-${mode}`}>
            <div className="container-fluid">
              <a className="navbar-brand" href=".">Navbar</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon" />
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href=".">Home</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href=".">About</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href=".">Services</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href=".">Blog</a>
                  </li>

                  <li className="nav-item">
                    <a className="nav-link active" aria-current="page" href=".">Contact</a>
                  </li>
             
                </ul>
                <div className="d-flex" >
                  <button className="btn btn-outline-success" onClick={()=>{
                      if (mode === 'light') {
                        localStorage.setItem('mode','dark')
                      setMode('dark');
                      }else{
                        localStorage.setItem('mode','light')
                        setMode('light');
                      }
                  }}>Dark</button>
                </div>
              </div>
            </div>
          </nav>

  )
}




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Nav />
    <CardList />
  </React.StrictMode>
);


