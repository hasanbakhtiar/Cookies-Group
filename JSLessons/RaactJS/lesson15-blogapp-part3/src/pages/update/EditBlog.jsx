import React from 'react'
import { connect } from 'react-redux'
import BlogForm from '../../components/BlogForm'
import { editBlog } from '../../actions/actionblog'
const EditBlog = props => {
  return (
    <div>
         <h1 className='my-5 text-center'>Edit Blog</h1>
        <BlogForm editblog={props.pvalue}
        onFormSubmit = {(a)=>{
            props.dispatch(editBlog(props.pvalue.id,a));
            props.history.push('/admin');
        }}
        />
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