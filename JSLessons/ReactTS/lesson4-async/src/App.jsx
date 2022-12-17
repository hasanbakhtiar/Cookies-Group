import axios from "axios";
import { useEffect, useState } from "react";




function App() {
  const [info,setInfo] =useState([]);
  useEffect(()=>{
      const comingData = async()=>{
          const dataList = await axios.get("https://rickandmortyapi.com/api/character");
          setInfo(dataList.data.results);
      }
      comingData();
  },[])
  
  return (
    <div className="App">
      {info.map((fd)=>{
        return <p>{fd.name}</p>
      })}
    </div>
  );
}

export default App;



