import Swal from "sweetalert2";

const FeedBackForm = () => {
  const handleAddProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const feedBack = form.feedBack.value;
    const newFeedBack = {
        feedBack,
    };
    console.log(newFeedBack);

    //  send data to the server:
    fetch(
        "https://b8a10-brandshop-server-side-mohiuddin-raki-7s8v1yz1b.vercel.app/feedback",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newFeedBack),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "FeedBack Added Successfully",
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
          Write Your FeedBack
        </h2>
        <form onSubmit={handleAddProduct}>
          <div className="form-control w-full ">
            <label className="input-group">
              <input
                type="text"
                name="feedBack"
                required
                placeholder="Write Your FeedBack"
                className="input input-bordered w-full"
              />
            </label>
          </div>

          <input
            type="submit"
            value="Add FeedBack"
            className="btn btn-block text-white bg-black mt-8"
          />
        </form>
      </div>
    </>
  );
};

export default FeedBackForm;
