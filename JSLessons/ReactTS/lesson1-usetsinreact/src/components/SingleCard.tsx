import { Link } from "react-router-dom"

type productTypes={
    title:string,
    price:number,
    desc:string,
    img:string,
    id:string
}

const SingleCard = (props:productTypes) => {
  return (
    <div className="col-12 col-sm-6 col-md-4">
        <div className="card" >
        <img style={{'width':'300px'}} src={props.img} className="card-img-top" alt="..." />
        <div className="card-body">
            <h5 className="card-title">{props.title}</h5>
            <p className="card-text">{props.price}</p>
            <p className="card-text">{props.desc.substring(0,30)}...</p>
            <Link to={`/products/${props.id}`} className="btn btn-primary">Read more</Link>
        </div>
        </div>

    </div>
  )
}

export default SingleCard