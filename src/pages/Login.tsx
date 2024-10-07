import React, { useRef, useState } from "react";
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

function Login() {
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
          <IonContent className="custom-content">
            <IonList inset={true} lines="full">
              <IonItem>
                <IonInput
                  ref={input}
                  label="Usuario"
                  placeholder="Ingresa tu usuario"
                  labelPlacement="floating"
                  clearInput
                />
              </IonItem>
              <IonItem>
                <IonInput
                  type="password"
                  label="Clave"
                  placeholder="Ingresa tu clave"
                  labelPlacement="floating"
                  clearInput
                >
                  <IonInputPasswordToggle slot="end" />
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

export default Login;
