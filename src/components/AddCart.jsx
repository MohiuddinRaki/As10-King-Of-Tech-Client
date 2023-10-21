import PropTypes from "prop-types";
import Swal from "sweetalert2";

const AddCart = ({ cart }) => {
  const { _id, name, photo, description } = cart;

  const handleDelete = (_id) => {
    console.log(_id);
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/cart/${_id}`, {
          method: 'DELETE'
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire("Deleted!", "Your product has been deleted.", "success");
            }
          });
      }
    });
  };

  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img className="h-96" src={photo} alt={name} />
      </figure>
      <div className="card-body">
        <h2 className="card-title font-bold text-4xl text-amber-500">{name}</h2>
        <p className=" font-medium text-emerald-500">{description}</p>
        <div className="card-actions justify-start">
          <button onClick={() => handleDelete(_id)} className="btn btn-primary">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default AddCart;

AddCart.propTypes = {
  cart: PropTypes.object.isRequired,
};
