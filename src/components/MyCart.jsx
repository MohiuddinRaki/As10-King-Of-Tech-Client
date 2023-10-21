import { useLoaderData } from "react-router-dom";
import Footer from "../pages/Footer";
import AddCart from "./AddCart";

const MyCart = () => {
  const cartLoader = useLoaderData();
  return (
    <div>
      <div className="container mx-auto p-8 md:p-16 lg:p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-20">
        {cartLoader.map((cart) => (
          <AddCart key={cart._id} cart={cart}></AddCart>
        ))}
      </div>
      <Footer></Footer>
    </div>
  );
};

export default MyCart;
