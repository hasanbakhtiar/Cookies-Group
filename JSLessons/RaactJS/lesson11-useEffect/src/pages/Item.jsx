import React from 'react'
import { useCart } from 'react-use-cart'
const Item = ({ctitle,csize,cprice,cimg,addproduct}) => {
  const {addItem}=useCart();
  return (
<div className="col-12 col-sm-6 col-md-4">
<div className="card">
  <div className="card-body">
  <img height={300} src={cimg} className="card-img-top" alt="..." />
    <h5 className="card-title">{ctitle}</h5>
    <p className="card-text">size:{csize}</p>
    <p className="card-text">{cprice}$</p>
    <button onClick={()=>(addItem(addproduct,alert('add successfully')))} className="btn btn-primary">Add to cart</button>
  </div>
</div>
</div>

  )
}

export default Item