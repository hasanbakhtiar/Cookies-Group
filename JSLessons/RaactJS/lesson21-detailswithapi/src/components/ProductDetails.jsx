import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

const ProductDetails = () => {

    const [apidata,setApidata] = useState([]);
    const {id} = useParams();
    const detailsItem = apidata.find(p=>p.id == id);
    useEffect(()=>{

        const comingData = async()=>{
            const fetchdata = await axios.get('https://fakestoreapi.com/products')
            setApidata(fetchdata.data);
        }
        comingData();

    },[])
    
  return (
    
          <>
        {detailsItem === undefined ? <img src="https://cdn.dribbble.com/users/2973561/screenshots/5757826/loading__.gif" alt="" /> : (
         <div className="container col-xxl-8 px-4 py-5">
         <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
             <div className="col-10 col-sm-8 col-lg-6">
             <img src={detailsItem.image} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
             </div>
             <div className="col-lg-6">
             <h1 className="display-5 fw-bold lh-1 mb-3">{detailsItem.title}</h1>
             <p className="lead">{detailsItem.description}</p>
             <div className="d-grid gap-2 d-md-flex justify-content-md-start">
                 <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Primary</button>
                 <button type="button" className="btn btn-outline-secondary btn-lg px-4">Default</button>
             </div>
             </div>
         </div>
         </div>
        )}
 
          </>

  )
}

export default ProductDetails