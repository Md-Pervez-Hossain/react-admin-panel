import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const PublicRoute = ({ children }) => {
  const isLogin = useAuth();
  const location = useLocation();
  return !isLogin ? (
    children
  ) : (
    <Navigate to="/" state={{ from: location }} replace />
  );
};

export default PublicRoute;
