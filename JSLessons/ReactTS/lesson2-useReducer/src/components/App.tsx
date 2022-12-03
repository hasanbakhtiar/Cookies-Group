import { useReducer } from "react";
type CounterState={
    count:number
}
type ResetAction ={
    type:'reset'
}
type UpdateAction={
    type:'increment' | 'decrement' ,
    payload:number

}
type CountAction= UpdateAction | ResetAction;

const initalState = { count: 0 };

const myReducer = (state:CounterState, action:CountAction) => {
  switch (action.type) {
    case "increment":
        return {count:state.count+action.payload}
    case "decrement":
        return {count:state.count-action.payload}
    case 'reset':
        return initalState;
    default:
        return {count:state.count}
  }
};

const App = () => {
    const [state,dispatch] = useReducer(myReducer,initalState)
  return (
    <div className="container mt-5">
      <button onClick={()=>dispatch({type:'decrement',payload:1})} className="btn btn-primary">-1</button>
      <span className="mx-3">{state.count}</span>
      <button onClick={()=>dispatch({type:'increment',payload:10})} className="btn btn-primary me-3">+1</button>
      <button onClick={()=>dispatch({type:'reset'})} className="btn btn-warning">reset</button>
    </div>
  );
};

export default App;
