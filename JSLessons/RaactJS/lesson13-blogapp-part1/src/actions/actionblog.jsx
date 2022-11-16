import { v4 as uuid } from 'uuid';
// Action Start
export const addBlog = ({title,desc}) => (
  {
    type: "ADD_BLOG",
    blog:{
      id:uuid(),
      title:title,
      desc:desc
    }
  }
);


// Action End