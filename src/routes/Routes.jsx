import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import ErrorPage from "../pages/ErrorPage";
import AddProduct from "../components/AddProduct";
import UpdateProduct from "../components/UpdateProduct";
import Register from "../pages/Register";
import Login from "../pages/Login";
import MyCart from "../components/MyCart";
import PrivateRoute from "./PrivateRoute";
import BrandCards from "../components/BrandCards";
import BrandProducts from "../components/BrandProducts";
import BrandUnic from "../components/BrandUnic";
import ProductsDetails from "../components/ProductsDetails";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <BrandCards></BrandCards>,
        loader: () => fetch("http://localhost:5000/brandu"),
      },
      {
        path: "/brand",
        loader: () => fetch("http://localhost:5000/product"),
        element: (
          <PrivateRoute>
            <BrandProducts></BrandProducts>
          </PrivateRoute>
        ),
      },
      {
        path: "/brand/:_id",
        loader: () => fetch("http://localhost:5000/product"),
        element: (
          <PrivateRoute>
            <ProductsDetails></ProductsDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/addProduct",
        element: (
          <PrivateRoute>
            <AddProduct></AddProduct>
          </PrivateRoute>
        ),
      },
      {
        path: "/brandUnic",
        element: <BrandUnic></BrandUnic>,
      },
      {
        path: "/updateProduct",
        element: <UpdateProduct></UpdateProduct>,
      },
      {
        path: "/cart",
        loader: () => fetch("http://localhost:5000/cart"),
        element: (
          <PrivateRoute>
            <MyCart></MyCart>
          </PrivateRoute>
        ),
      },
      {
        path: "register",
        element: <Register></Register>,
      },
      {
        path: "login",
        element: <Login></Login>,
      },
    ],
  },
]);

export default Routes;
