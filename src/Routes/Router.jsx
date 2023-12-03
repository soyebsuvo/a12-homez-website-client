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
import PropertyBoughtPage from "../Pages/Dashboard/UserPanel/PropertyBoughtPage";
import AddPropertyPage from "../Pages/Dashboard/AgentPanel/AddPropertyPage";
import AgentAddedProperty from "../Pages/Dashboard/AgentPanel/AgentAddedProperty";
import UpdateProperty from "../Pages/Dashboard/AgentPanel/UpdateProperty";
import RequestedProperties from "../Pages/Dashboard/AgentPanel/RequestedProperties";
import ManageProperties from "../Pages/Dashboard/AdminPanel/ManageProperties";
import ManageUsers from "../Pages/Dashboard/AdminPanel/ManageUsers";
import AdminRoute from "./AdminRoute";
import AgentRoute from "./AgentRoute";

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
        element : <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
        children : [
            {
                path : "/dashboard",
                element : <PrivateRoute><WelcomeDashboard></WelcomeDashboard></PrivateRoute>
            },
            {
                path : '/dashboard/myProfile',
                element : <PrivateRoute><MyProfile></MyProfile></PrivateRoute>
            },
            {
                path : "/dashboard/wishlist",
                element : <PrivateRoute><Wishlist></Wishlist></PrivateRoute>
            },
            {
                path : "/dashboard/makeOffer/:id",
                element : <PrivateRoute><OfferPage></OfferPage></PrivateRoute>,
                loader : ({params}) => fetch(`http://localhost:5000/wishlist/${params.id}`)
            },
            {
                path : "/dashboard/propertyBought",
                element : <PrivateRoute><PropertyBoughtPage></PropertyBoughtPage></PrivateRoute>
            },
            // agent route 
            {
                path : "/dashboard/addProperty",
                element : <AgentRoute><AddPropertyPage></AddPropertyPage></AgentRoute>
            },
            {
                path : '/dashboard/agentAddedProperty',
                element : <AgentRoute><AgentAddedProperty></AgentAddedProperty></AgentRoute>
            },
            {
                path : "/dashboard/updateProperty/:id",
                element : <AgentRoute><UpdateProperty></UpdateProperty>,</AgentRoute>,
                loader : ({params}) => fetch(`http://localhost:5000/properties/${params.id}`)
            },
            {
                path : "/dashboard/requestedProperties",
                element : <AgentRoute><RequestedProperties></RequestedProperties></AgentRoute>
            },
            // admin routes 
            {
                path : "/dashboard/manageProperty",
                element : <AdminRoute><ManageProperties></ManageProperties></AdminRoute>
            },
            {
                path : "/dashboard/manageUsers",
                element : <AdminRoute><ManageUsers></ManageUsers></AdminRoute>
            }
        ]
    }
])

export default router;