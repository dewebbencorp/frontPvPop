// src/modules/login/views/Login.tsx
import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Toast from "../../../common/components/Toast";
import useToast from "../../../common/hooks/useToast";
import { useAuth } from "../../../common/hooks/AuthContext";
import "../../../theme/Login.css"; // Importa los estilos personalizados
import logo from "../../../assets/logo.png.png"; // Ruta del logo en assets

const Login: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const { toastMessage, showToast, hideToast } = useToast();
  const { changeUser } = useAuth();
  const history = useHistory();

  const handleLogin = async () => {
    setErrorMessage("");
    if (!username || !password) {
      setErrorMessage("Por favor, completa todos los campos.");
      return;
    }

    try {
      const response = await axios.post(`${import.meta.env.VITE_APP_PATH_BACKEND}/api/auth/login`, {
        Clav_Usr: username.toUpperCase(),
        contrasenia: password,
      }, { withCredentials: true });

      const userUpperCase = username.toUpperCase();
      changeUser(userUpperCase);

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
      }

      showToast("success", `Bienvenido ${userUpperCase}`);
      
      // Redirigir a SalesPoint después del inicio de sesión exitoso
      history.push("/salespoint");
    } catch (err) {
      setErrorMessage("Usuario o contraseña incorrectos");
      showToast("error", "Usuario o contraseña incorrectos");
    }
  };

  return (
    <div className="login">
      <img src={logo} alt="Logo" className="login-logo" />

      <form className="wrapper" onSubmit={(e) => e.preventDefault()}>
        <h2>LOGIN</h2>
        <section className="group">
          <input
            type="text"
            className="input"
            name="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <label htmlFor="username" className="label">Usuario</label>
        </section>
        <section className="group">
          <input
            type="password"
            className="input"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <label htmlFor="password" className="label">Contraseña</label>
        </section>
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
        <button type="button" className="btns" onClick={handleLogin}>
          Ingresar
        </button>
        <span className="footer"></span>
      </form>

      {toastMessage && (
        <Toast type={toastMessage.type} message={toastMessage.message} onClose={hideToast} />
      )}
    </div>
  );
};

export default Login;
