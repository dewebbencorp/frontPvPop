import { useState, useEffect, useCallback } from 'react';
import INavbarModule from '../interfaces/INavbarModule';
import { useHistory } from 'react-router-dom';

const useNavigationData = () => {
  const history = useHistory();

  const [modules] = useState<INavbarModule[]>([
    { id: '1', title: 'Ventas', path: "/salespoint" },
    { id: '2', title: 'Devolución', path: "/returns" },
    { id: '3', title: 'Retiros', path: "/" },
    { id: '4', title: 'Auditorias', path: "/audit" },
    { id: '5', title: 'Cortes', path: "/" },
  ]);

  const [module, setModule] = useState<string>(() => {
    return localStorage.getItem('module') || '1';
  });
  const [title, setTitle] = useState<string>(() => {
    return localStorage.getItem('title') || 'Ventas';
  });

  const changeTitle = useCallback((newTitle: string) => {
    setTitle(newTitle);
    localStorage.setItem('title', newTitle);
  }, []);

  const changeModule = useCallback((newModuleId: string) => {
    const selectedModule = modules.find(mod => mod.id === newModuleId);
    if (selectedModule) {
      setModule(newModuleId);
      setTitle(selectedModule.title);
      localStorage.setItem('module', newModuleId);
      localStorage.setItem('title', selectedModule.title);
      history.push(selectedModule.path); 
    }
  }, [history, modules]);

  useEffect(() => {
    const savedTitle = localStorage.getItem('title');
    if (savedTitle) {
      setTitle(savedTitle);
    }

    const savedModule = localStorage.getItem('module');
    if (savedModule) {
      setModule(savedModule);
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
