import React, { Component } from 'react'

export class Nav extends Component {
  render() {
    return (
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <p className="navbar-brand" href="#">
            Navbar
          </p>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <p className="nav-link active" aria-current="page" href="#">
                  Home
                </p>
              </li>
              <li className="nav-item">
                <p className="nav-link" href="#">
                  Link
                </p>
              </li>
              <li className="nav-item dropdown">
                <p
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Dropdown
                </p>
                <ul className="dropdown-menu">
                  <li>
                    <p className="dropdown-item" href="#">
                      Action
                    </p>
                  </li>
                  <li>
                    <p className="dropdown-item" href="#">
                      Another action
                    </p>
                  </li>
                  <li>
                    <hr className="dropdown-divider" />
                  </li>
                  <li>
                    <p className="dropdown-item" href="#">
                      Something else here
                    </p>
                  </li>
                </ul>
              </li>
              <li className="nav-item">
                <p className="nav-link disabled">Disabled</p>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button>
            </form>
          </div>
        </div>
      </nav>
    )
  }
}

export default Nav