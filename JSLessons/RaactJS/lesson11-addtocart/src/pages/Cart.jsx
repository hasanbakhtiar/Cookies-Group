import React from 'react'
import { useCart } from 'react-use-cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Cart = () => {
  const {
    isEmpty,
    items,
    removeItem,
    updateItemQuantity,
    cartTotal
  } = useCart();
  const notify = () => toast("cart deleted");
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
      <th scope="col">Quantity</th>
      <th scope="col">Delete</th>
    </tr>
  </thead>
  <tbody>
    {items.map((fd,i)=>(
  <tr>
  <th scope="row">{i+1}</th>
  <td><img src={fd.img} width="100" alt="" /></td>
  <td>{fd.title}</td>
  <td>{fd.price*fd.quantity}$</td>
  <td><button className='btn btn-primary' onClick={() => updateItemQuantity(fd.id, fd.quantity - 1)}>-1</button><span className='mx-2'>{fd.quantity}</span><button className='btn btn-primary' onClick={() => updateItemQuantity(fd.id, fd.quantity + 1)}>+1</button></td>
  <td><button className='btn btn-danger' onClick={()=>{notify(removeItem(fd.id))}}>delete</button>
  <ToastContainer 
 position="top-center"
 autoClose={5000}
 hideProgressBar={false}
 newestOnTop={false}
 closeOnClick
 rtl={false}
 pauseOnFocusLoss
 draggable
 pauseOnHover
 theme="dark" />
  </td>
</tr>
))}
  
   
  </tbody>
</table>

<h1 className='mt-5'>Total Price:{cartTotal}$</h1>      
</div>

  )
}

export default Cart