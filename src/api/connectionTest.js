// src/api/connectionTest.ts
import axios from 'axios';

export const connectionTest = axios.create({
    baseURL: 'http://localhost:3000', // Asegúrate de que esta URL coincide con la del backend
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});
