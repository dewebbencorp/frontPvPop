import React, { useState } from "react";
import "./Navbar.css";
import {  IonLabel, IonFooter, IonButton } from "@ionic/react";
import useNavigationData from "../hooks/useNavigationData";
import CloseIcon from "../icons/CloseIcon";
import LogoutIcon from "../icons/LogoutIcon";

const Navbar: React.FC = () => {
  const { modules } = useNavigationData();
  const [showNavbar, setShowNavbar] = useState(true);

  const moduleColors = [
    { color: "#1C878F", hoverColor: "#176d73" },
    { color: "#384981", hoverColor: "#2e3d6c" },
    { color: "#4699DD", hoverColor: "#3778ad" },
    { color: "#EC6339", hoverColor: "#c55330" },
    { color: "#F3B24A", hoverColor: "#d29a41" },
  ];

  return (
    <>
      <IonFooter className="h-10">
        {showNavbar ? (
        <div className="flex flex-row w-full h-full">
          {modules.map((module, index) => (
            <button
              key={module.id}
              value={module.title}
              className="transition-all grow"
              style={{
                backgroundColor: moduleColors[index].color,
              }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor =
                  moduleColors[index].hoverColor)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = moduleColors[index].color)
              }
            >
              <IonLabel className="font-semibold text-white">{module.title}</IonLabel>
            </button>
          ))}
          <button
            className="transition-all grow max-w-16 justify-center flex items-center"
            style={{
              backgroundColor: "#d11439",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#A91D3A")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#d11439")
            }
          >
            <LogoutIcon/>
          </button>
          <button
            className="transition-all grow max-w-16 justify-center flex items-center"
            style={{
              backgroundColor: "#ff7411",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "#E56F1A")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "#ff7411")
            }
            onClick={() => setShowNavbar(false)}
          >
            <CloseIcon />
          </button>
        </div>
        ) : (
          <div className="flex w-full items-center justify-end px-4 bg-background">
            <IonButton className="w-10 rounded-[0.5rem]" onClick={() => setShowNavbar(true)}> X </IonButton>
          </div>
        )}
      </IonFooter>
    </>
  );
};

export default Navbar;


/* Versión Erick */
/* import React, { useState } from 'react';
import { IonFooter, IonButton, IonIcon, IonGrid, IonRow, IonCol, IonFab, IonFabButton } from '@ionic/react';
import { homeOutline, documentTextOutline, cashOutline, cartOutline, receiptOutline, chevronForwardCircle, chevronBackCircle, menu } from 'ionicons/icons';
import INavbarModule from '../interfaces/INavbarModule';
import { logInOutline } from 'ionicons/icons';
import '../../theme/Footer.css';

interface FooterProps {
  navbarModules: INavbarModule[];
}

const Footer: React.FC<FooterProps> = ({ navbarModules }) => {
  const [isVisible, setIsVisible] = useState(true);  // Controla si los botones son visibles o no

  const toggleMenu = () => {
    setIsVisible(!isVisible);  // Alterna el estado de visibilidad
  };

  return (
    <>
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton onClick={toggleMenu}>
          <IonIcon icon={isVisible ? chevronBackCircle : chevronForwardCircle} />
        </IonFabButton>
      </IonFab>

      {isVisible && (
        <IonFooter className="ion-no-border">
          <IonGrid className="footer-grid">
            <IonRow className="ion-align-items-center">
              <IonCol className="ion-text-center">
                <IonButton fill="solid" color="primary" className="footer-button" href="/ventas">
                  <IonIcon icon={cartOutline} slot="start" />
                  Ventas
                </IonButton>
              </IonCol>
              <IonCol className="ion-text-center">
                <IonButton fill="solid" color="secondary" className="footer-button" href="/devolucion">
                  <IonIcon icon={documentTextOutline} slot="start" />
                  Devolución
                </IonButton>
              </IonCol>
              <IonCol className="ion-text-center">
                <IonButton fill="solid" color="tertiary" className="footer-button" href="/retiro">
                  <IonIcon icon={cashOutline} slot="start" />
                  Retiro
                </IonButton>
              </IonCol>
              <IonCol className="ion-text-center">
                <IonButton fill="solid" color="warning" className="footer-button" href="/audit">
                  <IonIcon icon={receiptOutline} slot="start" />
                  Auditoría de Ventas
                </IonButton>
              </IonCol>
              <IonCol className="ion-text-center">
                <IonButton fill="solid" color="medium" className="footer-button" href="/cortes-caja">
                  <IonIcon icon={homeOutline} slot="start" />
                  Cortes de Caja
                </IonButton>
              </IonCol>
              <IonCol className="ion-text-center">
                <IonButton fill="solid" color="danger" className="footer-button" href="/cortes-caja">
                  <IonIcon icon={logInOutline} slot="start" />
                  Cerrar sesión
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonFooter>
        
      )} */
/* Versión Erick */