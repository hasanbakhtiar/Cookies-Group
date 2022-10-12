import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Card from "./components/Card";
import products from "./data/products";
class App extends Component {
  render() {
    return (
      <div className="row">
        {products.map((fd, i) => (
          <Card
            photo={fd.img}
            infobrand={fd.brand}
            infocolor={fd.color}
            infosize={fd.size}
            infostate={fd.new ? "new" : "old"}
            key={i}
          />
        ))}
      </div>
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
