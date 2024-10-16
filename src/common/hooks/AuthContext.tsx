import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

interface AuthContextType {
  isAuthenticated: boolean;
  user: string;
  loading: boolean;
  changeUser: (newUser: string) => void;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string>('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);  // Loading mientras se verifica el token

  useEffect(() => {
    const verifyToken = async () => {
      try {
        const response = await axios.get(`${import.meta.env.VITE_APP_PATH_BACKEND}/api/auth/verify-token`, {
          withCredentials: true, 
        });
        setUser(response.data.user.id || '');
        setIsAuthenticated(true);  // Autentica al usuario si el token es válido
      } catch (error) {
        setIsAuthenticated(false); 
      }
      setLoading(false);
    };

    verifyToken();
  }, []);

  const changeUser = (newUser: string) => {
    setUser(newUser.toUpperCase());
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUser('');
    setIsAuthenticated(false);
    axios.post(`${import.meta.env.VITE_APP_PATH_BACKEND}/api/auth/logout`, {}, {
      withCredentials: true
    });
  };

  return (
    <AuthContext.Provider value={{ user, isAuthenticated, loading, changeUser, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
