import React, { useRef } from "react";
import {
  IonButton,
  IonModal,
  IonHeader,
  IonContent,
  IonToolbar,
  IonTitle,
  IonPage,
  IonItem,
  IonInputPasswordToggle,
  IonInput,
  IonList,
  IonButtons,
  IonIcon,
} from "@ionic/react";
import { closeOutline } from "ionicons/icons";  // Importa el ícono de cierre
import { OverlayEventDetail } from "@ionic/core/components";

import "./Login.css";

function Example() {
  const modal = useRef<HTMLIonModalElement>(null);
  const input = useRef<HTMLIonInputElement>(null);

  const confirm = () => {
    modal.current?.dismiss(input.current?.value, "confirm");
  };

  const onWillDismiss = (ev: CustomEvent<OverlayEventDetail>) => {
    if (ev.detail.role === "confirm") {
      console.log(`Confirmed value: ${ev.detail.data}`);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Iniciar sesión</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonButton id="open-modal" expand="block">
          Abrir
        </IonButton>

        <IonModal
          ref={modal}
          trigger="open-modal"
          onWillDismiss={onWillDismiss}
          className="custom-modal"
        >
          <IonHeader>
            <IonToolbar>
              <IonTitle>Iniciar sesión</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => modal.current?.dismiss()}>
                  <IonIcon icon={closeOutline} />
                </IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent>
            <IonList inset={true} lines="inset">
              <IonItem>
                <IonInput ref={input} label="Usuario" placeholder="Ingresa tu usuario"></IonInput>
              </IonItem>
              <IonItem>
                <IonInput type="password" label="Clave" placeholder="Ingresa tu clave">
                  <IonInputPasswordToggle slot="end"></IonInputPasswordToggle>
                </IonInput>
              </IonItem>
            </IonList>
          </IonContent>
          <div className="custom-footer">
            <IonButton
              onClick={() => modal.current?.dismiss()}
              className="custom-button"
              fill="clear"
            >
              Cancelar
            </IonButton>
            <IonButton onClick={confirm} className="custom-button">
              Ingresar
            </IonButton>
          </div>
        </IonModal>
      </IonContent>
    </IonPage>
  );
}

export default Example;
