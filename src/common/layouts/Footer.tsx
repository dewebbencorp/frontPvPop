import React, { useState } from 'react';
import { IonFooter, IonButton, IonIcon, IonGrid, IonRow, IonCol, IonFab, IonFabButton } from '@ionic/react';
import { homeOutline, documentTextOutline, cashOutline, cartOutline, receiptOutline, chevronForwardCircle, chevronBackCircle, apps, menu } from 'ionicons/icons';
import INavbarModule from '../interfaces/INavbarModule';
import { logInOutline } from 'ionicons/icons';

interface FooterProps {
  navbarModules: INavbarModule[];
}

const Footer: React.FC<FooterProps> = ({ navbarModules }) => {
  const [isVisible, setIsVisible] = useState(true);

  const toggleMenu = () => {
    setIsVisible(!isVisible);
  };

  return (
    <>
      {/* Botón para mostrar/ocultar el menú */}
      <IonFab vertical="bottom" horizontal="end" slot="fixed">
        <IonFabButton onClick={toggleMenu}>
          <IonIcon icon={isVisible ? chevronForwardCircle : menu} />
        </IonFabButton>
      </IonFab>

      {/* Footer que contiene los botones rectangulares */}
      {isVisible && (
        <IonFooter className="ion-no-border">
          <IonGrid className="footer-grid">
            <IonRow className="ion-align-items-center">
              {/* Botones en formato rectangular con colores */}
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

                  Cerrar sesion
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonFooter>
      )}
    </>
  );
};

export default Footer;
