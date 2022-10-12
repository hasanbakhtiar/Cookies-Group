import React, { Component } from "react";

class Card extends Component {
  render() {
    return (
        <div className="card" style={{width: '18rem'}}>
        <img src={this.props.photo} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{this.props.infobrand}</h5>
          <p className="card-text">{this.props.infocolor}</p>
          <p className="card-text">{this.props.infosize}</p>
          <p className="card-text">{this.props.infostate}</p>
        </div>
      </div>
    );
  }
}

export default Card;
