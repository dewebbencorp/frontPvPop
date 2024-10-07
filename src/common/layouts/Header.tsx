import React, { useState, useEffect } from "react";
import { IonHeader, IonToolbar, IonButtons, IonBackButton } from "@ionic/react";
import { useLocation } from 'react-router-dom';
import useSesionData from "../hooks/useSesionData";
import '../../theme/Header.css'
const Header: React.FC = () => {
  const { user, store, turn } = useSesionData();
  const [currentTime, setCurrentTime] = useState<string>("");
  const location = useLocation();

  const getTitleByPath = (path: string) => {
    switch (path) {
      case "/home":
        return "Home";
      case "/audit":
        return "Auditoría de Ventas";
      default:
        return "App";
    }
  };

  useEffect(() => {
    const formatDate = () => {
      const now = new Date();
      const hours = now.getHours();
      const minutes = now.getMinutes();
      const ampm = hours >= 12 ? 'P.M' : 'A.M';
      const formattedTime = `${hours % 12 || 12}:${minutes < 10 ? '0' : ''}${minutes} ${ampm}`;
      setCurrentTime(formattedTime);
    };

    formatDate();
    const interval = setInterval(formatDate, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <IonHeader>
      <IonToolbar>
        <div className="flex w-full flex-row items-center justify-between gap-4">
          <div className="flex flex-row items-center min-w-80">
            <IonButtons slot="start">
              <IonBackButton defaultHref="/home"></IonBackButton>
            </IonButtons>
            <span className="font-bold text-[1.125rem]">
              {getTitleByPath(location.pathname)}
            </span>
          </div>
          <div className="w-full px-4 flex flex-row justify-between items-center">
            <div>
              <span className="text-[1rem] font-bold"> {store} </span>
            </div>
            <div>
              <span className="text-[1rem] font-bold"> {currentTime} </span>
            </div>
            <div>
              <span className="text-[1rem] font-bold">Turno:</span>
              <span className="text-[0.75rem] italic ml-1"> {turn} </span>
            </div>
            <div>
              <span className="text-[1rem] font-bold">Usuario:</span>
              <span className="text-[0.75rem] italic ml-1"> {user} </span>
            </div>
          </div>
        </div>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
