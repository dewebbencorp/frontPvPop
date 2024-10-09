import React, { useState, useEffect } from "react";
import { IonHeader, IonToolbar, IonButtons, IonBackButton } from "@ionic/react";
import useNavigationData from '../hooks/useNavigationData';
import useSesionData from "../hooks/useSesionData";

const Header: React.FC = () => {
  const { title} = useNavigationData();
  const { user, store, turn } = useSesionData();

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

    const intervalId = setInterval(() => {
      setCurrentTime(formatDate());
    }, 60000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <>
      <IonHeader>
        <IonToolbar>
          <div className="flex w-full flex-row items-center justify-between gap-4">
            <div className="flex flex-row items-center min-w-80">
              <IonButtons slot="start">
                <IonBackButton defaultHref="/Home"></IonBackButton>
              </IonButtons>

              <span className="font-bold text-[1.125rem] uppercase"> { title } </span>
            </div>

            <div className="w-full px-4 flex flex-row justify-between items-center">
              <div>
                <span className="text-[1rem] font-bold uppercase"> { store } </span>
              </div>

              <div>
                <span className="text-[1rem] font-bold uppercase"> { currentTime } </span>
              </div>

              <div>
                <span className="text-[1rem] font-bold uppercase"> Turno: </span>
                <span className="ml-1"> { turn } </span>
              </div>

              <div>
                <span className="text-[1rem] font-bold uppercase"> Usuario:</span>
                <span className="ml-1"> { user } </span>
              </div>
            </div>
          </div>
        </IonToolbar>
      </IonHeader>
    </>
  );
};

export default Header;
