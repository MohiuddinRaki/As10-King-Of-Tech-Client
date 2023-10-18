import { Outlet } from "react-router-dom";
import Navbar from "../header/Navbar";
import Footer from "./Footer";
import { ToastContainer } from "react-toastify";

const Root = () => {
    return (
        <div>
            Hello world!!!!!
            <Navbar></Navbar>
            <Outlet></Outlet>
            <ToastContainer></ToastContainer>
            <Footer></Footer>
        </div>
    );
};

export default Root;