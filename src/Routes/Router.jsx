import { createBrowserRouter } from "react-router-dom";
import MainLayouts from "../Layouts/MainLayouts";
import Home from "../Pages/Home/Home/Home";
import AllProperties from "../Pages/AllProperties/AllProperties";
import PropertyDetails from "../Pages/PropertyDetails/PropertyDetails";

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
            }
        ]
    }
])

export default router;