import { useEffect } from 'react';
import { useAuth } from './AuthContext';

const useTokenInterceptor = () => {
  const { authToken, logout } = useAuth();

  useEffect(() => {
    const checkTokenExpiration = () => {
      if (!authToken) return;

      const tokenPayload = JSON.parse(atob(authToken.split('.')[1]));
      const expiry = tokenPayload.exp * 1000;

      if (Date.now() >= expiry) {
        logout();
      }
    };

    const interval = setInterval(checkTokenExpiration, 60000); // Check every minute

    return () => clearInterval(interval);
  }, [authToken, logout]);
};

export default useTokenInterceptor;
