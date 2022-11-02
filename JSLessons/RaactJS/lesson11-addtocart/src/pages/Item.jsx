import React from 'react'
import { useCart } from 'react-use-cart'
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
const Item = ({ctitle,csize,cprice,cimg,addproduct}) => {
  const {addItem}=useCart();
  const notify = () => toast("cart added.");
  return (
<div className="col-12 col-sm-6 col-md-4">
<div className="card">
  <div className="card-body">
  <img height={300} src={cimg} className="card-img-top" alt="..." />
    <h5 className="card-title">{ctitle}</h5>
    <p className="card-text">size:{csize}</p>
    <p className="card-text">{cprice}$</p>
    <button onClick={()=>(notify(addItem(addproduct)))} className="btn btn-primary">Add to cart</button>
    <ToastContainer
    position="bottom-right"
    autoClose={2000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="dark"
     />
  </div>
</div>
</div>

  )
}

export default Item