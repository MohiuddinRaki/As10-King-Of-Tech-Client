const Banner = () => {
  return (
    <div
      className="hero h-[700px]"
      style={{
        backgroundImage: `url('https://i.ibb.co/q54cbWV/pexels-soner-g-rkem-6119578.jpg')`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            {" "}
            welcome to <br />
            <span className="text-pink-600">Dark Roast Events</span>
          </h1>
          <p className="mt-10 px-16 text-lg">
            We are committed to personal services and uncompromising quality on
            wedding and events.come have an advanture with us.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
