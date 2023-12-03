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
            },
            {
                path : "/dashboard/propertyBought",
                element : <PropertyBoughtPage></PropertyBoughtPage>
            },
            // agent route 
            {
                path : "/dashboard/addProperty",
                element : <AddPropertyPage></AddPropertyPage>
            },
            {
                path : '/dashboard/agentAddedProperty',
                element : <AgentAddedProperty></AgentAddedProperty>
            },
            {
                path : "/dashboard/updateProperty/:id",
                element : <UpdateProperty></UpdateProperty>,
                loader : ({params}) => fetch(`http://localhost:5000/properties/${params.id}`)
            },
            {
                path : "/dashboard/requestedProperties",
                element : <RequestedProperties></RequestedProperties>
            }
        ]
    }
])

export default router;