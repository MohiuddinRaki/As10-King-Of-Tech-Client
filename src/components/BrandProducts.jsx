import { useLoaderData } from "react-router-dom";
import BrandProduct from "./BrandProduct";

const BrandProducts = () => {
    const productLoader = useLoaderData();
    
    return (
        <div>
            <h2>product: {productLoader.length}</h2>
            <div className="container mx-auto p-8 md:p-16 lg:p-0 grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                {
                    productLoader.map(product => <BrandProduct key={product._id} product={product}></BrandProduct>)
                }
            </div>
        </div>
    );
};

export default BrandProducts;