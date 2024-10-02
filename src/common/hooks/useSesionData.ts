import { useState, useEffect } from 'react';

const useSesionData = () => {
  const [user, setUser] = useState<string>(() => {
    return localStorage.getItem('user') || 'Lalo123';
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
      setUser(savedTurn);
    }
    const savedStore = localStorage.getItem('store');
    if (savedStore) {
      setStore(savedStore);
    }
  }, []);

  return {
    user,
    changeUser,
    store,
    changeStore,
    turn,
    changeTurn
  };
};

export default useSesionData;
