import { createContext, useContext, useEffect, useState } from 'react';
import useTokenInterceptor from '../features/authentication/useTokenInterceptor';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));
  const [isAuthenticated, setIsAuthenticated] = useState(!!authToken);

  useEffect(() => {
    setIsAuthenticated(!!authToken);
  }, [authToken]);

  // useTokenInterceptor();

  useEffect(() => {
    setIsAuthenticated(!!authToken);
  }, [authToken]);

  const logout = () => {
    setAuthToken(null);
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ authToken, isAuthenticated, setAuthToken, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}

function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error('AuthContext must be used within an AuthProvider');
  }
  return context;
}

export { AuthProvider, useAuth };
