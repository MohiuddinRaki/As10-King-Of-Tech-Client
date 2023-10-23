import FeedBackForm from "./FeedBackForm";

const FeedBack = () => {
  
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold text-lime-500 text-center mt-20 mb-10">
        Clients Feedback
      </h1>
      <div className=" p-8 md:p-16 lg:p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        <div className="card card-compact bg-base-100 shadow-xl p-10">
          <figure>
            <h1>
            I recently bought the latest smartphone, and I couldnt be happier. The camera quality is exceptional, and the battery life is impressive. It has become an essential part of my daily life.
            </h1>
          </figure>

          <div className="card-body flex-row">
            <img
              className="rounded-full h-14 w-14"
              src="https://i.ibb.co/VvmSnPq/licensed-image.jpg"
              alt="Sharukh"
            />
            <h2 className="card-title text-red-400">Sharukh</h2>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl p-10">
          <figure>
            <h1>
            My new laptop is a game-changer! Its blazing fast and handles everything I throw at it. The build quality is excellent, and the screen is gorgeous. Its a real productivity booster.
            </h1>
          </figure>

          <div className="card-body flex-row">
            <img
              className="rounded-full h-14 w-14"
              src="https://i.ibb.co/mRGtbT7/MV5-BMj-E4-ODMz-Mjc4-MV5-BMl5-Ban-Bn-Xk-Ft-ZTcw-NDIy-Mjgx-OA-V1.jpg"
              alt="Randy"
            />
            <h2 className="card-title text-red-400">Randy</h2>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl p-10">
          <figure>
            <h1>
            I added a smart home hub to my setup, and its made my life so much more convenient. I can control everything from lights to the thermostat with my voice or phone. Setting up routines has never been easier.
            </h1>
          </figure>

          <div className="card-body flex-row">
            <img
              className="rounded-full h-14 w-14"
              src="https://i.ibb.co/gR9DZMt/images-1.jpg"
              alt="Downey"
            />
            <h2 className="card-title text-red-400">Downey</h2>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl p-10">
          <figure>
            <h1>
            The wireless headphones I purchased are a true gem. The sound quality is superb, and they are so comfortable to wear for extended periods. The noise cancellation feature is a lifesaver during long flights..
            </h1>
          </figure>

          <div className="card-body flex-row">
            <img
              className="rounded-full h-14 w-14"
              src="https://i.ibb.co/xsytKhd/licensed-image-1.jpg"
              alt="Shakib"
            />
            <h2 className="card-title text-red-400">Shakib</h2>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl p-10">
          <figure>
            <h1>
            This gaming console is a dream come true for any gamer. The graphics are mind-blowing, and the game library is extensive. Ive had endless hours of entertainment with it.
            </h1>
          </figure>

          <div className="card-body flex-row">
            <img
              className="rounded-full h-14 w-14"
              src="https://i.ibb.co/WH4c0Lv/images.jpg"
              alt="Salman"
            />
            <h2 className="card-title text-red-400">Salman</h2>
          </div>
        </div>
        <div className="card card-compact bg-base-100 shadow-xl p-10">
          <figure>
            <h1>
            My new fitness tracker has been a fantastic motivator for a healthier lifestyle. Its accurate in tracking my steps, heart rate, and sleep patterns. The companion app is easy to use and helps me stay on top of my fitness goals.
            </h1>
          </figure>

          <div className="card-body flex-row">
            <img
              className="rounded-full h-14 w-14"
              src="https://i.ibb.co/gPntRxZ/John-Abraham-Photo-4-webp-pmg.webp"
              alt="John"
            />
            <h2 className="card-title text-red-400">John</h2>
          </div>
        </div>
      </div>
      <FeedBackForm></FeedBackForm>
    </div>
  );
};

export default FeedBack;
