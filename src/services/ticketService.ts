import { Ticket } from "../common/hooks/useTicket";
import { connectionTest } from "../api/connectionTest";

export const obtenerTicketPorNumero = async (numero: string): Promise<Ticket> => {
    try {
        const response = await connectionTest.get(`/api/ticket/${numero}`, {
            // withCredentials: true  
        });
        return response.data;
    } catch (error) {
        console.error("Error obteniendo el ticket:", error);
        throw error;
    }
};