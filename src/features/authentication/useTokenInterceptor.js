import { useEffect } from 'react';
import { useAuth } from '../../context/AuthContext';

const useTokenInterceptor = () => {
  const { authToken, logout, setAuthToken } = useAuth();

  useEffect(() => {
    const checkTokenExpiration = () => {
      if (!authToken) return;

      const tokenPayload = JSON.parse(atob(authToken.split('.')[1]));
      const expiry = tokenPayload.exp * 1000;

      if (Date.now() >= expiry) {
        logout();
      }
    };

    const interval = setInterval(checkTokenExpiration, 60000 * 30); // check every minute

    return () => clearInterval(interval);
  }, [authToken, logout]);
};

export default useTokenInterceptor;
