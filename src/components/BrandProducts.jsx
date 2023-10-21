import { Link, useLoaderData, useParams } from "react-router-dom";
import BrandProduct from "./BrandProduct";

const BrandProducts = () => {
  const productLoader = useLoaderData();
  const { brand } = useParams();
  const products = productLoader.filter((product) => product.brand === brand);

  if (products.length < 1) {
    return (
      <div className="card container mx-auto mt-48">
        <figure>
          <img src="https://i.ibb.co/gSk7Lsn/temporarily-out-stock-hanging-red-260nw-2124385799.jpg" />
        </figure>
        <div className="card-body">
          <div className="card-actions justify-center">
            <Link to="/">
              <button className="btn btn-primary">Home</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="container mx-auto p-8 md:p-16 lg:p-0 grid grid-cols-1 md:grid-cols-2 gap-12 my-20">
        {products.map((product) => (
          <BrandProduct key={product._id} product={product}></BrandProduct>
        ))}
      </div>
    </div>
  );
};

export default BrandProducts;
