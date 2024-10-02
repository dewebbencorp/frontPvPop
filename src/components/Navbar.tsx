import React from "react";
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonButtons,
  IonButton,
  IonIcon,
  IonLabel,
  IonText,
  IonGrid,
  IonRow,
  IonCol,
} from "@ionic/react";
import { arrowBackOutline } from "ionicons/icons";

const Navbar: React.FC = () => {
  const fechaActual = new Date().toLocaleString(); // Genera la fecha y hora actual

  return (
    <IonHeader>
      <IonToolbar color="primary">
        <IonGrid>
          <IonRow className="ion-align-items-center">
            <IonCol size="1">
              <IonButtons>
                <IonButton>
                  <IonIcon icon={arrowBackOutline} />
                </IonButton>
              </IonButtons>
            </IonCol>

            <IonCol size="2">
              <IonTitle className="ion-no-padding">VENTA</IonTitle>
            </IonCol>

            <IonCol size="3">
              <IonLabel>
                <IonText>POP HYATT</IonText>
              </IonLabel>
            </IonCol>

            <IonCol size="3" className="ion-text-center">
              <IonLabel>
                <IonText>{fechaActual}</IonText>
              </IonLabel>
            </IonCol>

            <IonCol size="1">
              <IonLabel>
                <IonText>Turno: 1</IonText>
              </IonLabel>
            </IonCol>

            <IonCol size="2" className="ion-text-end">
              <IonLabel>
                <IonText>USUARIO: LALO123</IonText>
              </IonLabel>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonToolbar>
    </IonHeader>
  );
};

export default Navbar;
