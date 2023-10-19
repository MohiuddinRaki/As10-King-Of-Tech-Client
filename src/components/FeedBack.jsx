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
              Thanks to your team, our symposium was a huge success. How you can
              extract 150 people from lunch and back into the auditorium in 5
              minutes is a mystery to me but very much appreciated.
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
              Thank you for all your efforts with the Presidents Council on
              International Activities. This meeting was a big success in large
              part because of your hard work
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
              Thank you for the outstanding work of The Dark Roast Events group.
              We had a wonderful time and could not imagine pulling off our
              meeting without the guidance of your staff.
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
              On behalf of my team, I would like to sincerely thankThe Dark
              Roast Events for leading the logistical details of our program
              with such professionalism and grace.
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
              The Dark Roast Events team was an absolute pleasure to work with.
              They were very responsive throughout the entire planning process,
              kept our team updated on changes, and were very accommodating to
              all our needs
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
              The Dark Roast Events team did a great job with the Kerry
              Conference—which was quite a logistical challenge. Thank you and
              the whole The DRE for your great contribution to making this one
              of the most memorable events.
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
    </div>
  );
};

export default FeedBack;
