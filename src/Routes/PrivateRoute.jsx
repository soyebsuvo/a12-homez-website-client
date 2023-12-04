import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import Loader from "../Components/Loader";

export default function PrivateRoute({children}) {
    const location = useLocation();
    const {loading, user } = useContext(AuthContext);
    if(loading){
        return <Loader></Loader>
    }
    if(user){
        return children
    }
  return <Navigate to="/login" state={location.pathname} replace></Navigate>
}
PrivateRoute.propTypes = {
    children: PropTypes.node
}