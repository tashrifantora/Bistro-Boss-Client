import { Navigate, useLocation } from "react-router-dom";
import useAdmin from "../../../Hooks/useAdmin";
import useAuth from "../../../Hooks/useAuth";


const PrivateRouteAdmin = ({ children }) => {
    const { user, loading } = useAuth()
    const [isAdmin, isUserLoading] = useAdmin()

    const location = useLocation()

    // Loading
    if (loading || isUserLoading) {
        return <progress className="progress w-56"></progress>
    }

    if (user && isAdmin) {
        return children;
    }

    return <Navigate to='/login' state={{ from: location }} replace></Navigate>
};

export default PrivateRouteAdmin;