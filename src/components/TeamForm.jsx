import Swal from "sweetalert2";
import Footer from "../pages/Footer";

const TeamForm = () => {
  const handleAddTeam = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const possition = form.possition.value;
    const photo = form.photo.value;
    const newTeam = {
      name,
      possition,
      photo,
    };
    console.log(newTeam);

    //  send data to the server:
    fetch(
      "https://b8a10-brandshop-server-side-mohiuddin-raki-39avzeqhv.vercel.app/team",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(newTeam),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Team Added Successfully",
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
          Add Team Members
        </h2>
        <form onSubmit={handleAddTeam}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="name"
                placeholder="Name"
                required
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-xl font-semibold">
                Possition
              </span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="possition"
                placeholder="Possition"
                required
                className="input input-bordered w-full"
              />
            </label>
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
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <input
            type="submit"
            value="Add Team Member"
            className="btn btn-block text-white bg-black mt-8"
          />
        </form>
      </div>
      <Footer></Footer>
    </>
  );
};

export default TeamForm;
