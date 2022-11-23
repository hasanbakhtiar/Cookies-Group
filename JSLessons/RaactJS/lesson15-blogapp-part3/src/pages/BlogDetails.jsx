import React from 'react'
import { connect } from 'react-redux'
import BlogDetailItems from '../components/BlogDetailItems'

const BlogDetails = props => {
  return (
    <div><BlogDetailItems {...props.pvalue}/></div>
  )
}
const mapStateToProps=(state,props)=>{
    return{
        pvalue:state.blogred.find((q)=>{
            return q.id === props.match.params.id
        })
    }
}
export default connect(mapStateToProps)(BlogDetails)