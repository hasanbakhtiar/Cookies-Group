import React from 'react'
import { connect } from 'react-redux'
import {  addBlogToDatabase } from '../../actions/actionblog'
import BlogForm from '../../components/BlogForm'

const AddBlog = props => {
  return (
    <div>
        <h1 className='my-5 text-center'>Add Blog</h1>
        <BlogForm onFormSubmit={(fd)=>{
            props.dispatch(addBlogToDatabase(fd));
            props.history.push('/admin')
        }}/>
    </div>
  )
}

export default connect()(AddBlog)