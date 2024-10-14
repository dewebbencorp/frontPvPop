import React, { useEffect } from "react";
import CloseIcon from "../icons/CloseIcon";
import SuccessIcon from "../icons/SuccessIcon";
import ErrorIcon from "../icons/ErrorIcon";

interface ToastProps {
  type: "success" | "error";
  message: string;
  onClose: () => void;
}

const Toast: React.FC<ToastProps> = ({ type, message, onClose }) => {
  const toastClasses =
    type === "success"
      ? "text-green-500 bg-green-100 dark:bg-green-800 dark:text-green-200"
      : "text-red-500 bg-red-100 dark:bg-red-800 dark:text-red-200";

  const Icon = type === "success" ? SuccessIcon : ErrorIcon;

  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 3000);

    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={`absolute bottom-8 right-4 flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow ${toastClasses}`}
      role="alert"
    >
      <div className={`inline-flex items-center justify-center flex-shrink-0 w-8 h-8 ${toastClasses} rounded-lg`}>
        <Icon color="currentColor" />
      </div>
      <div className="ms-3 text-sm font-normal">{message}</div>
      <button
        className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg p-1.5"
        onClick={onClose}
      >
        <CloseIcon color="currentColor" />
      </button>
    </div>
  );
};

export default Toast;
