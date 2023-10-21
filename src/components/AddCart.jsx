import PropTypes from "prop-types";

const AddCart = ({ cart }) => {
  const { name, photo, description } = cart;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="h-96" src={photo} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-4xl text-amber-500">{name}</h2>
        <p className=" font-medium text-emerald-500">{description}</p>
        <div className="card-actions justify-start">
          <button className="btn btn-primary">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default AddCart;

AddCart.propTypes = {
  cart: PropTypes.object.isRequired,
};
