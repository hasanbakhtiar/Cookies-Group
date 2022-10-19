import React, { Component } from 'react'

class UserCard extends Component {
  render() {
    const {login,avatar_url,html_url,node_id} = this.props.comingdata;
    return (
   <div className="col-12 col-sm-6 col-md-3">
       <div className="card">
        <img src={avatar_url} className="card-img-top" alt={avatar_url} />
        <div className="card-body">
          <h5 className="card-title">{login}</h5>
          <p className="card-text">{node_id}</p>
          <a href={html_url} target="_blank" rel="noreferrer" className="btn btn-primary">Go Profile</a>
        </div>
      </div>
   </div>

    )
  }
}

export default UserCard