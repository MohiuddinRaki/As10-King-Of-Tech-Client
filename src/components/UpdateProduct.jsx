import { useLoaderData, useParams } from "react-router-dom";
import Footer from "../pages/Footer";
import Swal from "sweetalert2";

const UpdateProduct = () => {
  const productLoader = useLoaderData();
  const { _id } = useParams();
  const products = productLoader.find((product) => product._id === _id);

  const handleUpdateProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const brand = form.brand.value;
    const type = form.type.value;
    const price = form.price.value;
    const description = form.description.value;
    const rating = form.rating.value;
    const photo = form.photo.value;
    const updateProduct = {
      name,
      brand,
      type,
      price,
      description,
      rating,
      photo,
    };
    console.log(updateProduct);

    //  send data to the server:
    fetch(`https://b8a10-brandshop-server-side-mohiuddin-raki-6bicgiy8b.vercel.app/product/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateProduct)
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Product Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
        event.target.reset();
      });
  };

  return (
    <>
      <div className="bg-[#F4F3F0] p-24 my-12">
        <h2 className="text-center text-6xl font-bold mb-10">
          Update Product
        </h2>
        <form onSubmit={handleUpdateProduct}>
          <div className="flex gap-6">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-xl font-semibold">Name</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="name"
                  placeholder="Name"
                  defaultValue={products.name}
                  required
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-xl font-semibold">Brand</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="brand"
                  placeholder="Brand"
                  defaultValue={products.brand}
                  required
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-xl font-semibold">Type</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="type"
                  placeholder="Type"
                  defaultValue={products.type}
                  required
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-xl font-semibold"> Price</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="price"
                  placeholder="Price"
                  defaultValue={products.price}
                  required
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="flex gap-6">
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-xl font-semibold">
                  Description
                </span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  name="description"
                  required
                  placeholder="Short Description"
                  defaultValue={products.description}
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control w-1/2">
              <label className="label">
                <span className="label-text text-xl font-semibold">Rating</span>
              </label>
              <label className="input-group">
                <input
                  type="number"
                  name="rating"
                  placeholder="Rating"
                  defaultValue={products.rating}
                  required
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">Photo</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                required
                placeholder="Photo URL"
                defaultValue={products.photo}
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <input
            type="submit"
            value="Update Product"
            className="btn btn-block text-white bg-black mt-8"
          />
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default UpdateProduct;
