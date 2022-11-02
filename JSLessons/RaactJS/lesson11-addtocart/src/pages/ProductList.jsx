import React from 'react'
import Item from './Item'
import product from '../data/burger';
const ProductList = () => {
  return (
    <div className='container mt-5'>
        <div className="row">
          {product.map((fd,i)=>(
            <Item 
            key={i}
            ctitle={fd.title} 
            cprice={fd.price} 
            csize={fd.size}
            cimg={fd.img}
            addproduct={fd}
            />
          ))}
        </div>
    </div>
  )
}

export default ProductList