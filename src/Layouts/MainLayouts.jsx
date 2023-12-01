import { Outlet, useLocation } from "react-router-dom";
import Navbar from "../Shared/Navbar/Navbar";
import Footer from "../Shared/Footer/Footer";

export default function MainLayouts() {
    const location = useLocation();
    const isLogin = location.pathname === '/login' || location.pathname === "/register"
    return (
        <div className="max-w-7xl mx-auto">
            {isLogin || <Navbar></Navbar>}
            <Outlet></Outlet>
            {isLogin || <Footer></Footer>}
        </div>
    )
}
