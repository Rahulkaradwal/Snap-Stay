import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext();

function AuthProvider({ children }) {
  const [authToken, setAuthToken] = useState(localStorage.getItem('authToken'));
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

  const checkAuth = () => {
    const storedExpirationDate = localStorage.getItem('tokenExpireTime');
    const expirationDate = new Date(storedExpirationDate);
    const now = new Date();
    const duration = expirationDate.getTime() - now.getTime();
    return duration;
  };

  return (
    <AuthContext.Provider
      value={{
        authToken,
        isAuthenticated,
        setAuthToken,
        logout,
        loginContext,
        checkAuth,
      }}
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
