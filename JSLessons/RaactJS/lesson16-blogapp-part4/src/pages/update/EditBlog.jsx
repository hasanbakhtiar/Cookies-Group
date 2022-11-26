import React from 'react'
import { connect } from 'react-redux'
import BlogForm from '../../components/BlogForm'
import {  editBlogFromDatabase, removeBlogFromDatabase } from '../../actions/actionblog'
const EditBlog = props => {
  return (
    <div>
         <h1 className='my-5 text-center'>Edit Blog</h1>
        <BlogForm editblog={props.pvalue}
        onFormSubmit = {(a)=>{
            props.dispatch(editBlogFromDatabase(props.pvalue.id,a));
            props.history.push('/admin');
        }}
        />
        <button className='btn btn-danger text-center' onClick={()=>{
            props.dispatch(removeBlogFromDatabase(props.pvalue.id))
            props.history.push('/dashboard')    
        }}>Delete</button>
    </div>
  )
}
const mapStateToProps =(state,props)=>{
    return{
        pvalue:state.blogred.find((b)=>{
            return b.id === props.match.params.id
        })
    }
}

export default connect(mapStateToProps)(EditBlog)