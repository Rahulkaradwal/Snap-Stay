import { useAuth } from '../../context/AuthContext';
import Login from '../../pages/Login';

function ProtectRoute({ children }) {
  const { authChecker, setIsAuthenticated } = useAuth();

  if (!authChecker()) {
    setIsAuthenticated(false);
    return <Login />;
  }
  return children;
}

export default ProtectRoute;
