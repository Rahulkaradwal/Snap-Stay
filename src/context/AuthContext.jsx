import { createContext, useContext, useEffect, useState } from 'react';
import useTokenInterceptor from './useTokenInterceptor';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));
  console.log('in the context', authToken);
  const [isAuthenticated, setIsAuthenticated] = useState(!!authToken);

  useEffect(() => {
    setIsAuthenticated(!!authToken);
  }, [authToken]);

  const logout = () => {
    setAuthToken(null);
    localStorage.removeItem('authToken');
    setIsAuthenticated(false);
  };

  const loginContext = (token) => {
    setAuthToken(token);
    localStorage.setItem('authToken', token);
    setIsAuthenticated(true);
  };

  return (
    <AuthContext.Provider
      value={{ authToken, isAuthenticated, setAuthToken, logout, loginContext }}
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
