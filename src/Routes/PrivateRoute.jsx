import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';

export default function PrivateRoute({children}) {
    const location = useLocation();
    const {loading, user } = useContext(AuthContext);
    if(loading){
        return 
    }
    if(user){
        return children
    }
  return <Navigate to="/login" state={location.pathname} replace></Navigate>
}
PrivateRoute.propTypes = {
    children: PropTypes.node
}