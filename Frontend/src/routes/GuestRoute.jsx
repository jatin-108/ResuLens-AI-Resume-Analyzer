import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const GuestRoute = ({ children }) => {
  const { isAuthenticated } = useAuth();

  return !isAuthenticated ? children : <Navigate to="/dashboard" replace />;
};

export default GuestRoute;
