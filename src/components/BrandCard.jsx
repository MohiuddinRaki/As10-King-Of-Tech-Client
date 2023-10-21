import { Link } from "react-router-dom";
import PropTypes from "prop-types";

const BrandCard = ({ card }) => {
  const {  image, brand} = card;

  return (
    <>
      <Link to="/brand">
        <div className="card card-compact bg-base-100 shadow-xl">
          <figure>
            <img className="w-full h-72" src={image} alt={brand} />
          </figure>
          <div className="card-body">
            <h2 className="p-2 my-4  text-3xl font-bold text-center text-teal-500">
              {brand}
            </h2>
          </div>
        </div>
      </Link>
    </>
  );
};

export default BrandCard;

BrandCard.propTypes = {
  card: PropTypes.object.isRequired,
};
