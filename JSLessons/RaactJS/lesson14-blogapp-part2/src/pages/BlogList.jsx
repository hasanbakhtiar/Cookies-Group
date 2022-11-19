import React from 'react'
import { connect } from 'react-redux'
import SingleBlogCard from '../components/SingleBlogCard'

const BlogList = props => {
  return (
    <div className='row mt-5'>
        {props.pvalue.map((fd,i)=>{
          return <SingleBlogCard key={i} {...fd}/>
        })}
    </div>
  )
}

const mapStateToProps=(state)=>{
  return{
    pvalue: state.blogred
  }
}

export default connect(mapStateToProps)(BlogList)