import React, { Component } from 'react'
import UserCard from './UserCard'
class UserList extends Component {
  render() {
    return (
      <div className='container '>
        <div className="row g-3">
          {this.props.uservalue.map((fd,i)=>(
            <UserCard comingdata={fd} key={i}/>

          ))}
      
        </div>
      </div>
    )
  }
}

export default UserList