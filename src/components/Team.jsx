const Team = () => {
  
  return (
    <div className="container mx-auto">
      <h1 className="text-5xl font-bold text-lime-500 text-center mt-20 mb-10">
        Team Members
      </h1>
      <div className="p-8 md:p-16 lg:p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
        <div className="rounded-2xl  bg-gray-500 shadow-xl">
          <figure>
            <img
              className="rounded-t-2xl h-96 w-full"
              src="https://i.ibb.co/HxVJX29/IMG-20210106-180813.jpg"
              alt="Rakib"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl text-red-400">Rakib</h2>
            <p className="text-xl text-teal-500">CEO: Chief executive officer</p>
          </div>
        </div>
        <div className="rounded-2xl bg-gray-500 shadow-xl ">
          <figure>
            <img
              className="rounded-t-2xl h-96 w-full"
              src="https://i.ibb.co/WF6W01Q/IMG-20201231-151733.jpg"
              alt="Srabon"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl text-red-400">Srabon</h2>
            <p className="text-xl text-teal-500">
              CTO: Chief technology officer
            </p>
          </div>
        </div>
        <div className="rounded-2xl bg-gray-500 shadow-xl ">
          <figure>
            <img
              className="rounded-t-2xl h-96 w-full"
              src="https://i.ibb.co/GHvyMFt/IMG-20210101-124617.jpg"
              alt="Biplob"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl text-red-400">Biplob</h2>
            <p className="text-xl text-teal-500">Software architect</p>
          </div>
        </div>
        <div className="rounded-2xl bg-gray-500 shadow-xl ">
          <figure>
            <img
              className="rounded-t-2xl h-96 w-full"
              src="https://i.ibb.co/Ms0RVzw/IMG-20201231-151629.jpg"
              alt="Sagor"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl text-red-400">Sagor</h2>
            <p className="text-xl text-teal-500">CMO: Chief marketing officer</p>
          </div>
        </div>
        <div className="rounded-2xl bg-gray-500 shadow-xl">
          <figure>
            <img
              className="rounded-t-2xl h-96 w-full"
              src="https://i.ibb.co/gwsQ7SS/IMG-20201231-151703.jpg"
              alt="Rudro"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl text-red-400">Rudro</h2>
            <p className="text-xl text-teal-500">
              Chief financial officer (CFO)
            </p>
          </div>
        </div>
        <div className="rounded-2xl bg-gray-500 shadow-xl">
          <figure>
            <img
              className="rounded-t-2xl h-96 w-full"
              src="https://i.ibb.co/HYDSFyh/IMG-20210101-135802.jpg"
              alt="Niaz"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-xl text-red-400">Niaz</h2>
            <p className="text-xl text-teal-500">Business development manager</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
