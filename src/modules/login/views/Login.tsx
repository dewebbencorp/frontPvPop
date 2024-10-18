import React, { useState } from "react";
import Toast from "../../../common/components/Toast";
import useToast from "../../../common/hooks/useToast";
import { useAuth } from "../../../common/hooks/AuthContext"; 
import { login } from "../../../services/authService";

const Login: React.FC<{ onLoginSuccess: () => void }> = ({ onLoginSuccess }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { toastMessage, showToast, hideToast } = useToast();
  const { changeUser } = useAuth();

  const handleLogin = async () => {
    setErrorMessage("");
    if (!username || !password) {
      setErrorMessage("Por favor, completa todos los campos.");
      return;
    }
  
    try {
      // Llamar al servicio de login
      await login(username, password);

      const userUpperCase = username.toUpperCase();
      changeUser(userUpperCase);

      // Guardar el nombre de usuario en localStorage
      localStorage.setItem("username", userUpperCase);

      onLoginSuccess();
      showToast("success", `Bienvenido ${userUpperCase}`);
    } catch (err) {
      setErrorMessage("Usuario o contraseña incorrectos");
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
          {errorMessage && <p className="text-red-500">{errorMessage}</p>}
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
