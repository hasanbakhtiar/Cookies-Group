import SingleCard from "../components/SingleCard"
import productList from "../data/productList"

const Products = () => {
  return (
  <div className="container mt-5">
      <div className="row">
      {productList.map((fd:any,i:number)=>(
        <SingleCard id={fd.id} title={fd.title} price={fd.price} desc={fd.description} img={fd.image} />
      ))}
    </div>
  </div>
  )
}

export default Products