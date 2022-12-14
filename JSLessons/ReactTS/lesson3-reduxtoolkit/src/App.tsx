import { useState } from "react";
import {add, remove} from './features/todoSlice'
import { useAppSelector,useAppDispatch } from "./store";


function App() {
  const todos = useAppSelector(state=>state.todos);
  const [title,setTitle] = useState("");
  const dispatch = useAppDispatch();
  const onSave=()=>{
      dispatch(add(title));
      setTitle("");
  }
  const onDelete=(id:string)=>{
    dispatch(remove(id))
  }
  return (
    <div className="App">
     <input value={title} onChange={(e)=>{setTitle(e.target.value)}} type="text" />
     <button onClick={onSave}>save</button>
     <ul>
     {todos.map((todo:any,i:number)=><li>
      <span>{todo.title}</span>
      <button onClick={()=>onDelete(todo.id)}>del</button>
     </li>)}
     </ul>
    </div>
  );
}

export default App;
