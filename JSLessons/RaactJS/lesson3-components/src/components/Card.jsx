import React, { Component } from 'react'

class Card extends Component {
  render() {
    return (
        <div className="card col">
        <div className="card-body">
          <h5 className="card-title">{this.props.cardtitle}</h5>
          <p className="card-text">
           {this.props.cardtext}
          </p>
          <p href="#" className="btn btn-primary">
            Go somewhere
          </p>
        </div>
      </div>
    )
  }
}

export default Card