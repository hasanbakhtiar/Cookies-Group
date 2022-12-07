import React, { useEffect, useLayoutEffect, useState } from 'react'

const AppUseLayoutEffect = () => {
    const [message,setMessage] = useState('Hi');
    useLayoutEffect(()=>{
        alert('');
        setMessage('new value');
    })
    
  return (
    <div>{message}</div>
  )
}

export default AppUseLayoutEffect