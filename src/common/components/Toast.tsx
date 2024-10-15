import React from "react";
import { IonToast } from "@ionic/react";

import "../../theme/Toast.css";

interface ToastProps {
  type: "success" | "error";
  message: string;
  onClose: () => void;
}


const Toast: React.FC<ToastProps> = ({ type, message, onClose }) => {
  return (
    <IonToast
      isOpen={true}
      onDidDismiss={onClose}
      message={message} 
      duration={3000}
      position="bottom"
      buttons={[
        {
          text: "Cerrar",
          role: "cancel",
          handler: onClose,
        },
      ]}
      className={`custom-toast ${type === "success" ? "success-toast" : ""}`}
    />
  );
};

export default Toast;
