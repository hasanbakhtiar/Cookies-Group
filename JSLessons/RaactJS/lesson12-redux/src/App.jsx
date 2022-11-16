import React from "react";
import { createStore } from "redux";

const initalState = {
  count: 0,
};
// CRUD -> Create Read Update Delete
const store = createStore((state = initalState, action) => {
  switch (action.type) {
    case "INCREMENT":
      return {
        count: state.count + 1,
      };
    case "DECREMENT":
      return {
        count: state.count - 1,
      };
    default:
      return {
        count: state.count,
      };
  }
});


store.subscribe(() => {
    console.log(store.getState());
  });

store.dispatch({
    type:"DECREMENT"
})


// action
// reducer
// store
// dispatch
const App = () => {
  return <div>App</div>;
};

export default App;
