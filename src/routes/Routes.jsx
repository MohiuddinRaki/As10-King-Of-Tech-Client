import { createBrowserRouter } from "react-router-dom";
import Root from "../pages/Root";
import ErrorPage from "../pages/ErrorPage";
import AddProduct from "../components/AddProduct";
import UpdateProduct from "../components/UpdateProduct";

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
        }
    ],
  },
]);

export default Routes;
