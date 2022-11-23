import { v4 as uuid } from 'uuid';
// Action Start
export const addBlog = ({title,desc,img}) => (
  {
    type: "ADD_BLOG",
    blog:{
      id:uuid(),
      title:title,
      desc:desc,
      img:img
    }
  }
);
export const editBlog =(id,update)=>({type:"EDIT_BLOG",id,update});
// Action End