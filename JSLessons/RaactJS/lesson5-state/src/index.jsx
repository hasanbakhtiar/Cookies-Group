import React, { Component } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
// import Counter from './components/Counter';
import BookApp from "./components/BookApp";
class App extends Component {
  render() {
    return (
 <BookApp />
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
