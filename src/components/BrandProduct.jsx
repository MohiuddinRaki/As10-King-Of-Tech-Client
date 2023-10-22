import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const BrandProduct = ({ product }) => {
  const { _id, name, brand, type, price, rating, photo } = product;

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <div className="card card-compact bg-base-100 shadow-xl" data-aos="fade-right">
        <figure>
          <img className="h-96" src={photo} alt={name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title font-bold text-3xl text-emerald-500">
            {name}
          </h2>
          <p className="font-medium text-xl">
            <span className="text-amber-500">Brand: </span>
            <span className="text-emerald-500">{brand}</span>
          </p>
          <p className="font-medium text-xl">
            <span className="text-amber-500">Type: </span>
            <span className="text-emerald-500">{type}</span>
          </p>
          <p className="font-medium text-xl">
            <span className="text-amber-500">Price:</span>
            <span className="text-emerald-500"> {price} tk</span>
          </p>
          <p className="font-medium text-xl">
            <span className="text-amber-500">Rating:</span>
            <span className="text-emerald-500"> {rating}</span>
          </p>

          <div className="card-actions justify-start">
            <Link to={`/brand/${_id}`}>
              <button className="btn btn-primary">Details</button>
            </Link>
            <Link to={`/updateProduct/${_id}`}>
              <button className="btn btn-primary">Update</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default BrandProduct;

BrandProduct.propTypes = {
  product: PropTypes.object.isRequired,
};
