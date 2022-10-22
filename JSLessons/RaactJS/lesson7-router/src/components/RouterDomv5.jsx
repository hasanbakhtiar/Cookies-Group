import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import { BrowserRouter, NavLink, Route, Switch,Link } from "react-router-dom";
import "./sass/style.css";

class Nav extends Component {
  render() {
    return (
      <nav>
        <ul>
          <li>
            <NavLink exact activeClassName="active" to="/">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/about">
              About
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName="active" to="/contact">
              Contact
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}

class NotFoundPage extends Component {
  render() {
    return <h1>404 - not found</h1>;
  }
}
class Home extends Component {
  render() {
    return <h1>Home</h1>;
  }
}

class About extends Component {
  render() {
    return <>
    <div className="card">
      <Link className="btn btn-primary" to="/about/1">about1</Link>
      <Link className="btn btn-primary" to="/about/2">about2</Link>
    </div>
    </>;
  }
}

class Contact extends Component {
  render() {
    return <h1>Contact</h1>;
  }
}

class AppRouter extends Component {
  render() {
    return (
      <BrowserRouter>
        <Nav />
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route path="/about" component={About}></Route>
          <Route exact path="/about/:id" component={About}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route component={NotFoundPage}></Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
reportWebVitals();
