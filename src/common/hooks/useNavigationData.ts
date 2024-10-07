import { useState, useEffect } from 'react';
import INavbarModule from '../interfaces/INavbarModule';

const useNavigationData = () => {
  const [modules, setModules] = useState<INavbarModule[]>([
    { id: '1', title: 'Ventas', path: "/" },
    { id: '2', title: 'Devolución', path: "/returns" },
    { id: '3', title: 'Retiros', path: "/returns" },
    { id: '4', title: 'Auditorias', path: "/returns" },
    { id: '5', title: 'Cortes', path: "/returns" },
  ]);

  const [module, setModule] = useState<string>(() => {
    return localStorage.getItem('module') || '1';
  });
  const [title, setTitle] = useState<string>(() => {
    return localStorage.getItem('title') || 'Ventas';
  });

  const changeTitle = (newTitle: string) => {
    setTitle(newTitle);
    localStorage.setItem('title', newTitle);
  };

  const changeModule = (newModule: string) => {
    setTitle(newModule);
    localStorage.setItem('module', newModule);
  };

  useEffect(() => {
    const savedTitle = localStorage.getItem('title');
    if (savedTitle) {
      setTitle(savedTitle);
    }

    const savedModule = localStorage.getItem('module');
    if (savedModule) {
      setModule(savedModule)
    }
  }, []);

  return {
    title,
    module,
    modules,
    changeTitle,
    changeModule,
  };
};

export default useNavigationData;
