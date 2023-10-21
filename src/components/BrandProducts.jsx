import { useLoaderData, useParams } from "react-router-dom";
import BrandProduct from "./BrandProduct";
import Footer from "../pages/Footer";

const BrandProducts = () => {
  const productLoader = useLoaderData();
  const { brand } = useParams();
  const products = productLoader.filter((product) => product.brand === brand);

  if (products.length < 1) {
    return (
      <div className="card container mx-auto mt-48">
        <figure>
          <img
            className="w-1/2 h-1/2 rounded-2xl"
            src="https://i.ibb.co/gSk7Lsn/temporarily-out-stock-hanging-red-260nw-2124385799.jpg"
          />
        </figure>
      </div>
    );
  }

  return (
    <div>
      <div className="carousel my-20 h-[600px] w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src={products[3].photo} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide2" className="carousel-item relative w-full">
          <img src={products[1].photo} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
        <div id="slide3" className="carousel-item relative w-full">
          <img src={products[2].photo} className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
      <div className="container mx-auto p-8 md:p-16 lg:p-0 grid grid-cols-1 md:grid-cols-2 gap-12 my-20">
        {products.map((product) => (
          <BrandProduct key={product._id} product={product}></BrandProduct>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default BrandProducts;
