import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home/Home";
import AllProperties from "../Pages/AllProperties/AllProperties";
import PropertyDetails from "../Pages/PropertyDetails/PropertyDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoute from "./PrivateRoute";
import Dashboard from "../Pages/Dashboard/Dashboard";
import MyProfile from "../Pages/Dashboard/MyProfile";
import Wishlist from "../Pages/Dashboard/Wishlist";
import WelcomeDashboard from "../Pages/Dashboard/WelcomeDashboard";
import OfferPage from "../Pages/Dashboard/UserPanel/OfferPage";

const router = createBrowserRouter([
    {
        path : "/",
        element : <MainLayouts></MainLayouts>,
        children : [
            {
                path : "/",
                element : <Home></Home>
            },
            {
                path : '/allproperties',
                element : <AllProperties></AllProperties>
            },
            {
                path : "/propertyDetails/:id",
                element : <PrivateRoute><PropertyDetails></PropertyDetails>,</PrivateRoute>,
                loader : ({params}) => fetch(`http://localhost:5000/property/${params.id}`)
            },
            {
                path : '/login',
                element : <Login></Login>
            },
            {
                path : '/register',
                element : <Register></Register>
            }
        ]
    },
    {
        path : '/dashboard',
        element : <Dashboard></Dashboard>,
        children : [
            {
                path : "/dashboard",
                element : <WelcomeDashboard></WelcomeDashboard>
            },
            {
                path : '/dashboard/myProfile',
                element : <MyProfile></MyProfile>
            },
            {
                path : "/dashboard/wishlist",
                element : <Wishlist></Wishlist>
            },
            {
                path : "/dashboard/makeOffer/:id",
                element : <OfferPage></OfferPage>,
                loader : ({params}) => fetch(`http://localhost:5000/wishlist/${params.id}`)
            }
        ]
    }
])

export default router;