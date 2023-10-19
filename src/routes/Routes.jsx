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

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <BrandCards></BrandCards>,
        loader: () => fetch("/Brand.json"),
      },
      {
        path: "/brand/:id",
        loader: () => fetch("/Brand.json"),
        element: <PrivateRoute><BrandProducts></BrandProducts></PrivateRoute>
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
        path: "updateProduct",
        element: <UpdateProduct></UpdateProduct>,
      },
      {
        path: "myCart",
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
