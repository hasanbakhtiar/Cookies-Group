import axios from "axios";
import React, { Component } from "react";
import Nav from "./components/Nav";
import Search from "./components/Search";
import UserList from "./components/UserList";

class App extends Component {
  constructor(){
    super();
    this.state={
      users:[]
    }
  }

  seachUser=(keyword)=>{
    axios
    .get(`https://api.github.com/search/users?q=${keyword}`)
    .then((res)=>this.setState({users:res.data.items}))
    .catch(err=>console.log(err))
  }

  render() {
    return (
      <div>
        <Nav
          title=" GitHub"
          url="https://github.com"
          icon="fa-brands fa-github"
        />
        <Search searchValue={this.seachUser}/>
        <UserList uservalue={this.state.users}/>
        {/* {console.log(this.state.users)} */}
      </div>
    );
  }
}

export default App;
