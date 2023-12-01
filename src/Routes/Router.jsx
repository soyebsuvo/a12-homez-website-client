import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home/Home";
import AllProperties from "../Pages/AllProperties/AllProperties";
import PropertyDetails from "../Pages/PropertyDetails/PropertyDetails";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

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
                element : <PropertyDetails></PropertyDetails>,
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
    }
])

export default router;