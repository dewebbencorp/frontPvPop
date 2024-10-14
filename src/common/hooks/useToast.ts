import { useState } from "react";

type ToastType = "success" | "error";

interface ToastMessage {
  type: ToastType;
  message: string;
}

const useToast = () => {
  const [toastMessage, setToastMessage] = useState<ToastMessage | null>(null);

  const showToast = (type: ToastType, message: string) => {
    setToastMessage({ type, message });
  };

  const hideToast = () => {
    setToastMessage(null);
  };

  return { toastMessage, showToast, hideToast };
};

export default useToast;
