import userlist  from '../data/users.json';
import { useMemo, useState } from 'react';
const AppUseMemo = () => {
const [count, setCount] = useState(1);
const [userId,setUserid] = useState(null);
  const getUserRows =()=>{
    console.log('getUserRows worked');
    return userlist.map((user,index)=><div key={index} onClick={()=>{
      setUserid(user.id)
    }}>{user.name}</div>)
  } 
  const userRows = useMemo(()=>getUserRows(),[userId]);
  
  return (
    <div>
      {userRows}
      <p>{userId}</p>
      <p>{count}</p>
      <button onClick={()=>{setCount(count+1)
      console.log('count');
      }}>increment</button>
    </div>
  )
}

export default AppUseMemo