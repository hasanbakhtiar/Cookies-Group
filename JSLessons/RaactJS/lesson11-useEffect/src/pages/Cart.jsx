import React from 'react'
import { useCart } from 'react-use-cart';
const Cart = () => {
  const {
    isEmpty,
    items,
    removeItem,
  } = useCart();
  if(isEmpty){
   return(
    <div className='text-center'>
    <h1>cart is empty</h1>
  </div>
   )
  }
  return (
<div className="container mt-5">
<table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Img</th>
      <th scope="col">Title</th>
      <th scope="col">Price</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {items.map((fd,i)=>(
  <tr>
  <th scope="row">{i+1}</th>
  <td><img src={fd.img} width="100" alt="" /></td>
  <td>{fd.title}</td>
  <td>{fd.price}$</td>
  <td><button className='btn btn-danger' onClick={()=>{removeItem(fd.id)}}>delete</button></td>
</tr>
))}
  
   
  </tbody>
</table>
</div>

  )
}

export default Cart