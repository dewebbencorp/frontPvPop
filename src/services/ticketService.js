// src/services/ticketService.js
import { connectionTest } from "../api/connectionTest";

// Función para obtener un ticket específico por su número de remisión
export const obtenerTicketPorNumero = async (numero) => {
    try {
        const response = await connectionTest.get(`/api/ticket/${numero}`);
        return response.data;
    } catch (error) {
        console.error("Error obteniendo el ticket:", error);
        throw error;
    }
};
