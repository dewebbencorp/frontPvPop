import React, { useState } from "react";
import axios from "axios";
import { useAuth } from "../../../common/hooks/AuthContext";
import Toast from "../../../common/components/Toast";
import useToast from "../../../common/hooks/useToast";

interface ModalConfirmacionVentaProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (username: string) => void;
}

const ModalConfirmacionVenta: React.FC<ModalConfirmacionVentaProps> = ({
  isOpen,
  onClose,
  onConfirm,
}) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { toastMessage, showToast, hideToast } = useToast();

  const handleConfirm = async () => {
    setErrorMessage("");
    if (!username || !password) {
      setErrorMessage("Por favor, completa todos los campos.");
      return;
    }
  
    try {
      await axios.post(`${import.meta.env.VITE_APP_PATH_BACKEND_TEST}/api/auth/confirmar-autorizacion`, {
        Clav_Usr: username,
        contrasenia: password,
      });
  
      onConfirm(username);
      showToast("success", `Venta autorizada por ${username}`);
    } catch (error) {
      setErrorMessage("Autorización fallida. Verifica tus credenciales.");
    }
  };
  

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Confirmar Venta</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-700">Usuario</label>
            <input
              type="text"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
            />
          </div>
          <div>
            <label className="block text-gray-700">Clave</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-teal-500"
            />
          </div>
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        </div>

        <div className="mt-6 flex justify-end">
          <button
            onClick={handleConfirm}
            className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
          >
            Confirmar Venta
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 ml-4"
          >
            Cancelar
          </button>
        </div>

        {toastMessage && (
          <Toast
            type={toastMessage.type}
            message={toastMessage.message}
            onClose={hideToast}
          />
        )}
      </div>
    </div>
  );
};

export default ModalConfirmacionVenta;
