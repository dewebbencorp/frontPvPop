import React, { createContext, useContext, useState, useEffect } from 'react';

interface AuthContextType {
  user: string;
  store: string;
  turn: string;
  changeUser: (newUser: string) => void;
  changeStore: (newStore: string) => void;
  changeTurn: (newTurn: string) => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState(() => localStorage.getItem('user') || '');
  const [store, setStore] = useState(() => localStorage.getItem('store') || 'POP HYATT');
  const [turn, setTurn] = useState(() => localStorage.getItem('turn') || '1');

  const changeUser = (newUser: string) => {
    const userUpperCase = newUser.toUpperCase();
    setUser(userUpperCase);
    localStorage.setItem('user', userUpperCase);
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
    if (savedUser) setUser(savedUser);

    const savedStore = localStorage.getItem('store');
    if (savedStore) setStore(savedStore);

    const savedTurn = localStorage.getItem('turn');
    if (savedTurn) setTurn(savedTurn);
  }, []);

  return (
    <AuthContext.Provider value={{ user, store, turn, changeUser, changeStore, changeTurn }}>
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
