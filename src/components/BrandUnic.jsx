import Swal from "sweetalert2";

const BrandUnic = () => {
  const handleAddBrandu = (event) => {
    event.preventDefault();
    const form = event.target;
    const brand = form.brand.value;

    const image = form.image.value;
    const newBrandU = {
      brand,
      image,
    };
    console.log(newBrandU);

    //  send data to the server:
    fetch("https://b8a10-brandshop-server-side-mohiuddin-raki-39avzeqhv.vercel.app/brandu", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBrandU),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Product Added Successfully",
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
        <h2 className="text-center text-6xl font-bold mb-10">Add Product</h2>
        <form onSubmit={handleAddBrandu}>
          <div className="form-control w-1/2">
            <label className="label">
              <span className="label-text text-xl font-semibold">Brand</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="brand"
                placeholder="Brand"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">Image</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="image"
                required
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <input
            type="submit"
            value="Add Product"
            className="btn btn-block text-white bg-black mt-8"
          />
        </form>
      </div>
    </>
  );
};

export default BrandUnic;
