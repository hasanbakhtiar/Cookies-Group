import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import DashboardItem from '../../components/DashboardItem'
const Dashhboard = props => {
  return (
    <div className='conatiner'>
        <h1 className='text-center my-5'>Admin dashboard</h1>
        <Link to="/add" className='btn btn-primary mb-3'>Add Blog</Link>
        <div className="col-12">
        <table class="table">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Photo</th>
        <th scope="col">Title</th>
        <th scope="col">Description</th>
        <th scope="col">Update</th>
      </tr>
    </thead>
    <tbody>
    {props.pvalue.map((fd,i)=>{
         return <DashboardItem count={i} key={i} {...fd}/>
        })}
    </tbody>
  </table>
        </div>
        
        </div>
  )
}


const mapStateToProps=(state)=>{
    return{
      pvalue: state.blogred
    }
  }
export default connect(mapStateToProps)(Dashhboard)