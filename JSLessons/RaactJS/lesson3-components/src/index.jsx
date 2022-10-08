import React, { Component, Fragment } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import "./sass/style.css";
import Nav from "./components/Nav";
import Card from "./components/Card";
const prodcut = [
  {
    name:"a",
    price:10
  },
  {
    name:"ab",
    price:20
  },
  {
    name:"ac",
    price:30
  },

]
class App extends Component {
  render() {
    return (
      <Fragment>
        <Nav />
        <h1>Hello</h1>
        <div className="container">
          <div className="row">
        
          {prodcut.map((fd,i)=>(
              <Card cardtitle={fd.name} cardtext={fd.price} key={i}/>
          ))}
          </div>
        </div>
      </Fragment>
    );
  }
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
