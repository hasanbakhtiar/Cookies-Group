import React from "react";
import { Link } from "react-router-dom";

const SingleBlogCard = ({title,desc,img,id}) => {
  return (
    <div className="col-12 col-sm-6 col-md-4">
      <div className="card">
        <img src={img} className="card-img-top" alt={title} />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">
           {`${desc.substring(0, 30)}...`}
          </p>
          <Link to={`blogs/${id}`} className="btn btn-primary">
            Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SingleBlogCard;
