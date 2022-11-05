import React, { useEffect, useState } from 'react'

const App = () => {
    const [state,setState] = useState(0);
    const [count,setCount] = useState(0);
    useEffect(()=>{
        console.log("update");
    },[])
  return (
    <div style={{"marginLeft":"100px"}}>
        <p>{state}</p>
        <button style={{color:"red"}} onClick={()=>{setState(state+1)}}>+1</button>
        <p>{count}</p>
        <button style={{color:"red"}} onClick={()=>{setCount(count+1)}}>+1</button>
    </div>
  )
}

export default App