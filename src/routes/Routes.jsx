import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import ErrorPage from "../pages/ErrorPage";
import AddProduct from "../components/AddProduct";
import UpdateProduct from "../components/UpdateProduct";
import Register from "../pages/Register";
import Login from "../pages/Login";

const Routes = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: "/addProduct",
            element: <AddProduct></AddProduct>
        },
        {
            path: "updateProduct",
            element: <UpdateProduct></UpdateProduct>
        },
        {
            path: "register",
            element: <Register></Register>
        },
        {
            path: "login",
            element: <Login></Login>
        }
    ],
  },
]);

export default Routes;
