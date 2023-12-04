import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import useCheckRole from "../Hooks/useCheckRole";

export default function AdminRoute({children}) {
    const [ role , isRolePending] = useCheckRole();
    const location = useLocation();
    const {loading, user } = useContext(AuthContext);
    if(loading || isRolePending){
        return 
    }
    if(user && role === "admin"){
        return children
    }
  return <Navigate to="/login" state={location.pathname} replace></Navigate>
}
AdminRoute.propTypes = {
    children: PropTypes.node
}