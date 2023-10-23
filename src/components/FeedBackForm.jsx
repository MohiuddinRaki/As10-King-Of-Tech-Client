import Swal from "sweetalert2";

const FeedBackForm = () => {
  const handleAddFeedBack = (event) => {
    event.preventDefault();
    const form = event.target;
    const feedBack = form.feedBack.value;
    const newFeedBack = {
        feedBack,
    };
    console.log(newFeedBack);

    //  send data to the server:
    fetch(
        "https://b8a10-brandshop-server-side-mohiuddin-raki-39avzeqhv.vercel.app/feedback",
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
      <div className="bg-[#F4F3F0] rounded-2xl p-24 my-12">
        <h2 className="text-center text-6xl font-bold mb-10">
          Write Your FeedBack
        </h2>
        <form onSubmit={handleAddFeedBack}>
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
