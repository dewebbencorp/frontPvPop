import React, { useState } from "react";
import axios from "axios";
import Toast from "../../../common/components/Toast";
import useToast from "../../../common/hooks/useToast";
import { useAuth } from "../../../common/hooks/AuthContext"; // Usa el contexto

interface LoginProps {
  onLoginSuccess: () => void;
}

const Login: React.FC<LoginProps> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { toastMessage, showToast, hideToast } = useToast();
  const { changeUser } = useAuth(); // Utiliza el contexto de autenticación

  const handleLogin = async () => {
    try {
      const response = await axios.post(`${import.meta.env.VITE_APP_PATH_BACKEND_TEST}/api/auth/login`, {
        Clav_Usr: username,
        contrasenia: password,
      });

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        changeUser(username); // Actualiza el usuario en el contexto

        onLoginSuccess();
        showToast("success", "Inicio de sesión exitoso");
      }
    } catch (err) {
      showToast("error", "Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Iniciar sesión</h2>

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
        </div>

        <div className="mt-6 flex justify-end">
          <button onClick={handleLogin} className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition">
            Ingresar
          </button>
        </div>
      </div>

      {toastMessage && (
        <Toast type={toastMessage.type} message={toastMessage.message} onClose={hideToast} />
      )}
    </div>
  );
};

export default Login;
