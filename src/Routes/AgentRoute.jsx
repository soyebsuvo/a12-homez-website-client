import { useContext } from "react"
import { AuthContext } from "../Providers/AuthProvider/AuthProvider"
import { Navigate, useLocation } from "react-router-dom";
import PropTypes from 'prop-types';
import useCheckRole from "../Hooks/useCheckRole";
import Loader from "../Components/Loader";

export default function AgentRoute({children}) {
    const [ role , isRolePending] = useCheckRole();
    const location = useLocation();
    const {loading, user } = useContext(AuthContext);
    if(loading || isRolePending){
        return <Loader></Loader>
    }
    if(user && role === "agent"){
        return children
    }
  return <Navigate to="/login" state={location.pathname} replace></Navigate>
}
AgentRoute.propTypes = {
    children: PropTypes.node
}