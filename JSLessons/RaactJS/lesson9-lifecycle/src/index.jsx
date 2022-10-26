import React, { Component, Fragment, useState } from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


class Text extends Component{
  render(){
    return(
      <>
       <h1>hello</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum sapiente ducimus eius atque veniam ullam. Possimus sunt exercitationem excepturi nostrum provident repellat doloribus porro. Consequatur minus numquam culpa voluptate similique?</p>
        <p>count</p>
      </>
    )
  }
}

class App extends Component{
  componentDidMount(){
    console.log('componentDidMount running...');
    setTimeout(() => {
      document.querySelector('#loading').className = "d-none";
      document.querySelector('#main').className = " container d-block";
    }, 100);
  }
  componentDidUpdate(){
      console.log('componentDidUpdate running...');
      document.querySelector('button').classList.add('btn-primary');
  }
  constructor(){
    super();
    console.log('constructor running');
    this.state={
      a:true
    }
  }
  render(){
    let data;
    if (this.state.a) {
     data = <Text/>
    }
    return(
      <>

      <div id="loading" className="d-block">
        <h1>loading...</h1>
      </div>

      <div id="main" className="  d-none">
        {data}
        <button className="btn " onClick={()=>{this.setState({a:false})}}>+</button>
      </div>
      </>
    )
  }
}

// class ComponentOne extends Component {
//   // Defining the componentWillUnmount method
//   componentWillUnmount() {
//     alert("The component is going to be unmounted");
//   }

//   render() {
//     return <h1>Hello Geeks!</h1>;
//   }
// }

// class App extends React.Component {
//   state = { display: true };
//   delete = () => {
//     this.setState({ display: false });
//   };

//   render() {
//     let comp;
//     if (this.state.display) {
//       comp = <ComponentOne />;
//     }
//     return (
//       <div>
//         {comp}
//         <button onClick={this.delete}>Delete the component</button>
//       </div>
//     );
//   }
// }

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
reportWebVitals();
