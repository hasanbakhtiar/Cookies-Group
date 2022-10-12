import React, { Component } from "react";

class Counter extends Component {
  constructor(props) {
    super(props);
    this.decrementCount = this.decrementCount.bind(this);
    this.state = {
      appname: "Counter App",
      count: 0,
    };
  }

   incrementCount=()=>{
    this.setState({
      count:this.state.count + 1
    })
  }

  decrementCount(){
    if (this.state.count >0) {
      this.setState({
        count:this.state.count - 1
      })
    }
  }

  render() {
    return (
      <div className="mt-5 container">
        <h1>{this.state.appname}</h1>
        <button className="btn btn-danger" onClick={this.decrementCount}>-</button>
        <span className="mx-4">{this.state.count}</span>
        <button className="btn btn-success" onClick={this.incrementCount}>+</button>
      </div>
    );
  }
}

export default Counter;
