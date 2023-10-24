import {  useLoaderData, useParams } from "react-router-dom";
import Footer from "../pages/Footer";
import AddCart from "./AddCart";
import { useState } from "react";

const MyCart = () => {
  const cartLoader = useLoaderData();
  const { email } = useParams();
  const cartsload = cartLoader.filter((cart) => cart.email === email);
  const [carts, setCarts] = useState(cartsload);

  if (cartsload.length < 1) {
    return (
      <div className="card container mx-auto mt-48">
        <figure>
          <img
            className="rounded-2xl"
            src="https://i.ibb.co/VqRf6Pb/5639809.webp"
          />
        </figure>
      </div>
    );
  }
  return (
     <>
      <div>
        <div className="container mx-auto p-8 md:p-16 lg:p-0 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 my-20">
          {carts.map((cart) => (
            <AddCart
              key={cart._id}
              cart={cart}
              carts={carts}
              setCarts={setCarts}
            ></AddCart>
          ))}
        </div>
      </div>
      <Footer></Footer>
     </>
  );
};

export default MyCart;
