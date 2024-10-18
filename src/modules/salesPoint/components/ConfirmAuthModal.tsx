import React, { useState } from 'react';

interface ConfirmAuthModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: (username: string, password: string) => void;
  actionDescription: string;
}

const ConfirmAuthModal: React.FC<ConfirmAuthModalProps> = ({ isOpen, onClose, onConfirm, actionDescription }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleConfirm = () => {
    if (!username || !password) {
      setErrorMessage('Por favor, completa todos los campos.');
      return;
    }

    onConfirm(username, password);
  };

  return (
    <div className={`fixed inset-0 z-50 bg-gray-800 bg-opacity-50 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="relative mx-auto my-16 bg-white rounded-lg shadow-lg max-w-md w-full p-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-4">Confirmar {actionDescription}</h2>

        <div className="space-y-4">
          <div>
            <label className="block text-gray-700">Usuario Autorizado</label>
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

        <div className="mt-6 flex justify-end space-x-4">
          <button
            onClick={handleConfirm}
            className="px-4 py-2 bg-teal-600 text-white rounded-md hover:bg-teal-700"
          >
            Confirmar
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            Cancelar
          </button>
        </div>
      </div>
    </div>
  );
};

export default ConfirmAuthModal;
