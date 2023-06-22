import { Navigate } from "react-router-dom";
interface ProtectedRouteProps {
  isAuthenticated: boolean;
  children: React.ReactNode;
}

const ProtectedRoute = ({ isAuthenticated, children }: ProtectedRouteProps) => {
  if (isAuthenticated) {
    return children;
  }
  return <Navigate to="/login" />;
};

export default ProtectedRoute;
