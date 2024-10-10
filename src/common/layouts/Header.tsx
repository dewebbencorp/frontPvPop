import React, { useState, useEffect } from "react";
import { IonHeader, IonToolbar, IonButtons, IonBackButton } from "@ionic/react";
import { useLocation } from "react-router-dom";
import useNavigationData from "../hooks/useNavigationData";
import { useAuth } from "../hooks/AuthContext";  // Usar el hook correctamente

const Header: React.FC = () => {
  const { title, changeTitle } = useNavigationData();
  const { user, store, turn } = useAuth();  // Usa el hook `useAuth` para acceder al contexto
  const location = useLocation();

  const [currentTime, setCurrentTime] = useState<string>("");

  useEffect(() => {
    const formatDate = () => {
      const now = new Date();

      let day = now.getDate();
      let month = now.getMonth() + 1;
      let year = now.getFullYear().toString().slice(-2);

      let hours = now.getHours();
      let minutes = now.getMinutes();

      const ampm = hours >= 12 ? 'P.M' : 'A.M';
      hours = hours % 12;
      hours = hours ? hours : 12;
      const minutesStr = minutes < 10 ? '0' + minutes.toString() : minutes.toString();

      const dayStr = day < 10 ? '0' + day.toString() : day.toString();
      const monthStr = month < 10 ? '0' + month.toString() : month.toString();

      return `${dayStr}/${monthStr}/${year} ${hours}:${minutesStr} ${ampm}`;
    };

    setCurrentTime(formatDate());
  }, []);

  useEffect(() => {
    if (location.pathname.startsWith("/ticket")) {
      changeTitle("Previsualización");
    } else if (location.pathname === "/home") {
      changeTitle("Home");
    } else if (location.pathname === "/audit") {
      changeTitle("Auditorías");
    }
  }, [location, changeTitle]);

  const backButtonHref = location.pathname.startsWith("/ticket") ? "/audit" : "/home";

  return (
    <IonHeader>
      <IonToolbar>
        <div className="flex w-full flex-row items-center justify-between gap-4">
          <div className="flex flex-row items-center min-w-80">
            {location.pathname !== "/home" && (
              <IonButtons slot="start">
                <IonBackButton defaultHref={backButtonHref}></IonBackButton>
              </IonButtons>
            )}
            <span className="font-bold text-[1.125rem] uppercase p-4"> {title} </span>
          </div>

          <div className="w-full px-4 flex flex-row justify-between items-center">
            <div>
              <span className="text-[1rem] font-bold uppercase"> {store} </span>
            </div>

            <div>
              <span className="text-[1rem] font-bold uppercase"> {currentTime} </span>
            </div>

            <div>
              <span className="text-[1rem] font-bold uppercase">Turno: {turn} </span>
            </div>

            <div>
              <span className="text-[1rem] font-bold uppercase">Usuario: </span>
              <span className="ml-1"> {user} </span>  {/* Usuario dinámico desde el contexto */}
            </div>
          </div>
        </div>
      </IonToolbar>
    </IonHeader>
  );
};

export default Header;
