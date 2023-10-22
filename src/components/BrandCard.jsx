import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const BrandCard = ({ card }) => {
  const { image, brand } = card;

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Link to={`/brandPro/${brand}`}>
        <div
          className="card card-compact bg-base-100 shadow-xl"
          data-aos="fade-right"
        >
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
