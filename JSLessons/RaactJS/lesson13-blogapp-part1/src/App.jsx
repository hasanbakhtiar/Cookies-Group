import React from "react";
import configureStore from "./store/configureStore";
import { addBlog } from "./actions/actionblog";
const store  = configureStore();





// Dispatch Start
store.subscribe(()=>{console.log(store.getState())});
store.dispatch(addBlog({title:"title1",desc:"desc1"}));
store.dispatch(addBlog({title:"title2",desc:"desc2"}));

// Dispatch End

const App = () => {
  return <div>App</div>;
};

export default App;
