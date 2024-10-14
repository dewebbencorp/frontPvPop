import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './theme/App.css'
import './theme/variables.css';
import { AuthProvider } from './common/hooks/AuthContext';


const container = document.getElementById('root');
const root = createRoot(container!);
root.render(
  <React.StrictMode>
      <AuthProvider>
    <App />
    </AuthProvider>
  </React.StrictMode>
);