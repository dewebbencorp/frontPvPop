import { useState, useEffect } from 'react';

const useNavigationData = () => {
  const [title, setTitle] = useState<string>(() => {
    return localStorage.getItem('title') || 'Ventas';
  });

  const changeTitle = (newTitle: string) => {
    setTitle(newTitle);
    localStorage.setItem('title', newTitle);
  };

  useEffect(() => {
    const savedTitle = localStorage.getItem('title');
    if (savedTitle) {
      setTitle(savedTitle);
    }
  }, []);

  return {
    title,
    changeTitle,
  };
};

export default useNavigationData;
