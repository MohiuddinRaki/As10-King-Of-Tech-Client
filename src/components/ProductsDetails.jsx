import { useLoaderData, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

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
    fetch("https://b8a10-brandshop-server-side-mohiuddin-raki-39avzeqhv.vercel.app/cart", {
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

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div
      className="container mx-auto mt-12 card bg-gray-500 shadow-xl w-1/2"
      data-aos="fade-right"
    >
      <figure>
        <img className="w-full h-[500px]" src={product.photo} alt={product.name} />
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
  );
};

export default ProductsDetails;
