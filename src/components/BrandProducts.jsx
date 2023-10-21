import { useLoaderData, useParams } from "react-router-dom";
import BrandProduct from "./BrandProduct";

const BrandProducts = () => {
    const productLoader = useLoaderData();
    const {brand} = useParams();
    const products = productLoader.filter(product => product.brand === brand)
    
    return (
        <div>
            <h2>product: {products.length}</h2>
            <div className="container mx-auto p-8 md:p-16 lg:p-0 grid grid-cols-1 md:grid-cols-2 gap-12 mb-20">
                {
                    products.map(product => <BrandProduct key={product._id} product={product}></BrandProduct>)
                }
            </div>
        </div>
    );
};

export default BrandProducts;