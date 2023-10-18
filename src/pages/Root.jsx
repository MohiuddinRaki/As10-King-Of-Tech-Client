import { Outlet } from "react-router-dom";
import Navbar from "../header/Navbar";
import Footer from "./Footer";

const Root = () => {
    return (
        <div>
            Hello world!!!!!
            <Navbar></Navbar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;