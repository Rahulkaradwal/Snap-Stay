import { useAuth } from '../../context/AuthContext';
import Login from '../../pages/Login';

function ProtectRoute({ children }) {
  const { authChecker } = useAuth();

  if (!authChecker()) {
    return <Login />;
  }
  return children;
}

export default ProtectRoute;
