import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const ProductsDetails = () => {
  const products = useLoaderData();
  const { _id } = useParams();
  const product = products.find((product) => product._id === _id);

  const handleAddCart = (product) => {
    const photo = product.photo;
    const name = product.name;
    const description = product.description;
    const newCart = { photo, name, description };

    //  send data to the server:
    fetch("http://localhost:5000/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCart),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Product Added to Cart Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <div className="container mx-auto mt-12 card bg-base-100 shadow-xl">
        <figure>
          <img src={product.photo} alt={product.name} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{product.description}</h2>
          <div className="card-actions justify-start">
            <button
              onClick={() => handleAddCart(product)}
              className="btn btn-primary"
            >
              Add Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductsDetails;
