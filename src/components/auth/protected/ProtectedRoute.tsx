// create protected route component that takes isAuthicated from redux store and renders component if true
// otherwise redirects to login page
//
import { Navigate } from "react-router-dom";

const ProtectedRoute = ({isAuthenticated, children}) => {
    if(isAuthenticated) {
        return children
    }
    return <Navigate to="/login" />
}

export default ProtectedRoute;