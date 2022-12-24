import axios from 'axios';
import React, { useEffect, useState } from 'react'
import SingleCard from './SingleCard';

const Product = () => {
    const [apidata,setApidata] = useState([]);

    useEffect(()=>{

        const comingData = async()=>{
            const fetchdata = await axios.get('https://fakestoreapi.com/products')
            setApidata(fetchdata.data);
        }
        comingData();

    },[])
    
  return (
    <div className='container'>
           <h1 className='my-5 text-center'>Products</h1>
        <div className="row g-5">
        {apidata.map(items=>{
            return <SingleCard id={items.id} key={items.id} photo={items.image} title={items.title} desc={items.description}/>
        })}
        </div>
        
    </div>
  )
}

export default Product