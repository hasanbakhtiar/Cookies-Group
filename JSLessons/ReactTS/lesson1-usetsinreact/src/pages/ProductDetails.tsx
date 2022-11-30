import React from 'react'
import { useParams } from 'react-router-dom'
import productList from '../data/productList';

const ProductDetails = () => {
    const {id} = useParams();
    const detailItems = productList.find(p => p.id === id)
  return (
 <div className="container col-xxl-8 px-4 py-5">
  <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
    <div className="col-10 col-sm-8 col-lg-6">
      <img src={detailItems?.image} className="d-block mx-lg-auto img-fluid" alt="Bootstrap Themes" width={700} height={500} loading="lazy" />
    </div>
    <div className="col-lg-6">
      <h1 className="display-5 fw-bold lh-1 mb-3">{detailItems?.title}</h1>
      <p className="lead">{detailItems?.description}</p>
      <div className="d-grid gap-2 d-md-flex justify-content-md-start">
        <button type="button" className="btn btn-primary btn-lg px-4 me-md-2">Add to cart</button>
      </div>
    </div>
  </div>
</div>

  )
}

export default ProductDetails