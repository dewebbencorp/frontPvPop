// src/api/connectionTest.ts
import axios from 'axios';

export const connectionTest = axios.create({
    baseURL: import.meta.env.VITE_APP_PATH_BACKEND,
    withCredentials: true, // Asegúrate de que esta URL coincide con la del backend
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

export const connection = axios.create({
    baseURL: import.meta.env.VITE_APP_PATH_BACKEND,
    withCredentials: true, // Asegúrate de que esta URL coincide con la del backend
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});
