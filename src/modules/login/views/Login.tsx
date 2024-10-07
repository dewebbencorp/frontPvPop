import React, { useState } from "react";

const Login: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    console.log(`Logging in with username: ${username}`);
    setIsModalOpen(false); 
    window.location.href = "http://localhost:5173/home";
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <button
        onClick={() => setIsModalOpen(true)}
        className="bg-teal-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-teal-700 transition"
      >
        Abrir Login
      </button>

      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-gray-700">Iniciar Sesión</h2>
              <button
                onClick={handleCancel}
                className="text-gray-500 hover:text-red-600 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-gray-700">Usuario</label>
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Ingresa tu usuario"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                />
              </div>
              <div>
                <label className="block text-gray-700">Clave</label>
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Ingresa tu clave"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-teal-500"
                />
              </div>
            </div>

            <div className="mt-6 flex justify-end space-x-4">
              <button
                onClick={handleCancel}
                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400 transition"
              >
                Cancelar
              </button>
              <button
                onClick={handleLogin}
                className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700 transition"
              >
                Ingresar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
