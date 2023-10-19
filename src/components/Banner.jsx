const Banner = () => {
  return (
    <div
      className="hero h-[700px]"
      style={{
        backgroundImage: `url('https://i.ibb.co/MkrFtZc/electronic-companies.webp')`,
      }}
    >
      <div className="hero-overlay "></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            welcome to <br />
            <span className="text-pink-600">King Of Tech</span>
          </h1>
          <p className="mt-10 px-16 text-xl font-medium">
            We are committed to uncompromising quality on Products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
