import React, { Component } from "react";
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
class Card extends Component {
  render() {
    return (
      <div className="card" style={{ width: "18rem" }}>
        <img src={this.props.images} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.bookname}</h5>
          <p className="card-text">{this.props.bookauthor}</p>
          <p className="card-text">{this.props.booklenght} pages</p>
        </div>
      </div>
    );
  }
}

class BookApp extends Component {
  constructor() {
    super();
    this.state = {
      photo: img1,
      name: "1984",
      author: "George Orwell",
      pageCount: 190,
      dislay:"d-none"
    };
  }
  nextbook=()=>{
    this.setState({
        photo: img2,
        name: "Metro 2033",
        author: "Dimitri Qluxovski",
        pageCount: 590,
        dislay:"d-flex"
    })
  }
  render() {
    return (
      <div className="mt-5 container" >
        <div className={`row ${this.state.dislay}`}>
          <Card
            images={this.state.photo}
            bookname={this.state.name}
            bookauthor={this.state.author}
            booklenght={this.state.pageCount}
          />
        </div>
        <button className="btn btn-primary mt-5" onClick={this.nextbook}>next book</button>
      </div>
    );
  }
}

export default BookApp;
