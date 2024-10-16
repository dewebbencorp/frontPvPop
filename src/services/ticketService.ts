import { Ticket } from "../common/hooks/useTicket";  // Asegúrate de importar Ticket si es necesario
import { connectionTest } from "../api/connectionTest";

// Función para obtener un ticket específico por su número de remisión
export const obtenerTicketPorNumero = async (numero: string): Promise<Ticket> => {
    try {
        const response = await connectionTest.get(`/api/ticket/${numero}`, {
            withCredentials: true  // Enviar cookies con la solicitud
        });
        return response.data;
    } catch (error) {
        console.error("Error obteniendo el ticket:", error);
        throw error;
    }
};
