import { useAuth } from '../../context/AuthContext';
import Login from '../../pages/Login';

function ProtectRoute({ children }) {
  const { authChecker } = useAuth();
  console.log('routechecker', authChecker());

  if (!authChecker()) {
    return <Login />;
  }
  return children;
}

export default ProtectRoute;
