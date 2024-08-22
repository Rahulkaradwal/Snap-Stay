import { createContext, useContext, useEffect, useState } from 'react';
import getCurrentTime from '../utils/getTime';

const AuthContext = createContext();

// helper function to check if the token is expired

const isTokenExpired = (expiration) => {
  if (!expiration) return true;
  return getCurrentTime() > expiration;
};

const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem('authToken'));

  const [expirationTime, setExpirationTime] = useState(() => {
    const storedValue = localStorage.getItem('tokenExpireTime');
    return storedValue ? parseInt(storedValue, 10) : null;
  });

  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const authChecker = () => {
    return token !== null && !isTokenExpired(expirationTime);
  };

  const logout = () => {
    setToken(null);
    setIsAuthenticated(false);
    localStorage.removeItem('authToken');
    localStorage.removeItem('tokenExpireTime');
  };

  useEffect(() => {
    if (token && !isTokenExpired(expirationTime)) {
      setIsAuthenticated(true);
    } else {
      logout();
    }
  }, [expirationTime, token]);

  useEffect(() => {
    if (token) {
      localStorage.setItem('authToken', token);
    }
  });

  const loginCtx = (token, expiration) => {
    setToken(token);
    setExpirationTime(expiration);
    setIsAuthenticated(true);
    localStorage.setItem('authToken', token);
    localStorage.setItem('tokenExpireTime', expiration.toString());
  };

  return (
    <AuthContext.Provider
      value={{
        token,
        isAuthenticated,
        loginCtx,
        authChecker,
        logout,
        expirationTime,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('AuthContext must be used within an AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };
