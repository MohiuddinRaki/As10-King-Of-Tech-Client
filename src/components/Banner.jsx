const Banner = () => {
  return (
    <div
      className="hero h-[700px]"
      style={{
        backgroundImage: `url('https://i.ibb.co/WgzZG6g/360-F-308697506-9ds-BYHXm9-Fwu-W0qc-Eqim-AEXUvz-Twfzwe.jpg')`,
      }}
    >
      <div className="hero-overlay "></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">
            welcome to <br />
            <span className="text-amber-500">King Of Tech</span>
          </h1>
          <p className="mt-10 px-16 text-2xl font-medium text-emerald-500">
            We are committed to uncompromising quality on Products.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Banner;
