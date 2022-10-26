import { useState } from "react";

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <div className="container mt-3">
      <p>count:{count}</p>
      <button onClick={
        ()=>{setCount(a=>a+1)}
      }>+1</button>
    </div>
  );
};

export default App;
