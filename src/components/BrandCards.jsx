import { useLoaderData } from "react-router-dom";
import Footer from "../pages/Footer";
import Banner from "./Banner";
import FeedBack from "./FeedBack";
import BrandCard from "./BrandCard";
import GoogleMap from "./GoogleMap";
import Team from "./Team";

const BrandCards = () => {
  const brandCard = useLoaderData();

  return (
    <div>
      <Banner></Banner>
      <div>
        <h1 className="text-5xl font-bold text-lime-500 text-center mt-20 mb-10">
          OUR Available Brands
        </h1>
        <div className="container mx-auto p-8 md:p-16 lg:p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-20">
          {brandCard.map((card, idx) => (
            <BrandCard key={idx} card={card}></BrandCard>
          ))}
        </div>
      </div>
      <FeedBack></FeedBack>
      <Team></Team>
      <GoogleMap></GoogleMap>
      <Footer></Footer>
    </div>
  );
};

export default BrandCards;
