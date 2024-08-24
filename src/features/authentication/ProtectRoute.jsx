// ProtectRoute.js
import { Navigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';

function ProtectRoute({ children }) {
  const { authChecker, setIsAuthenticated } = useAuth();

  if (!authChecker()) {
    setIsAuthenticated(false);

    return <Navigate to="/login" replace />;
  }

  return children;
}

export default ProtectRoute;
