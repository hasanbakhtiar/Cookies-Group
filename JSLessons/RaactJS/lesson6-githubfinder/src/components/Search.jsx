import React, { Component } from 'react'

class Search extends Component {
  constructor(){
    super();
    this.state={
      keyword:""
    }
  }
  inputChange=(e)=>{
    this.setState({
      keyword:e.target.value
    })
  }
  formSubmit=(e)=>{
    e.preventDefault();
    this.props.searchValue(this.state.keyword)
  }
  render() {
    return (
      <div className='container mt-5'>
        <form onSubmit={this.formSubmit}>
          <div className="input-group mb-3 col-9">
            <input onChange={this.inputChange} type="text" className="form-control" placeholder="Enter username" />
            <button className="btn btn-outline-secondary" type="button" >Search</button>
          </div>
        </form>
      </div>
    )
  }
}

export default Search