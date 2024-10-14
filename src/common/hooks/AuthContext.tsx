// AuthContext.tsx

import React, { createContext, useContext, useState, useEffect } from 'react';

// Define la estructura del contexto
interface AuthContextType {
  user: string;
  store: string;
  turn: string;
  changeUser: (newUser: string) => void;
  changeStore: (newStore: string) => void;
  changeTurn: (newTurn: string) => void;
}

// Crea el contexto
const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string>(() => {
    return localStorage.getItem('user') || '';
  });
  const [store, setStore] = useState<string>(() => {
    return localStorage.getItem('store') || 'POP HYATT';
  });
  const [turn, setTurn] = useState<string>(() => {
    return localStorage.getItem('turn') || '1';
  });

  const changeUser = (newUser: string) => {
    setUser(newUser);
    localStorage.setItem('user', newUser);
  };

  const changeStore = (newStore: string) => {
    setStore(newStore);
    localStorage.setItem('store', newStore);
  };

  const changeTurn = (newTurn: string) => {
    setTurn(newTurn);
    localStorage.setItem('turn', newTurn);
  };

  useEffect(() => {
    const savedUser = localStorage.getItem('user');
    if (savedUser) {
      setUser(savedUser);
    }
    const savedTurn = localStorage.getItem('turn');
    if (savedTurn) {
      setTurn(savedTurn);
    }
    const savedStore = localStorage.getItem('store');
    if (savedStore) {
      setStore(savedStore);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ user, store, turn, changeUser, changeStore, changeTurn }}>
      {children}
    </AuthContext.Provider>
  );
};

// Hook para acceder al contexto
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
