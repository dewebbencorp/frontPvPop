// src/services/auditService.ts
import { connectionTest } from "../api/connectionTest";

export const obtenerAuditorias = async () => {
    try {
        const response = await connectionTest.get("/api/audit");
        console.log("Datos de auditorías:", response.data); // Verifica que muestra datos
        return response.data;
    } catch (error) {
        console.error("Error obteniendo auditorías:", error);
        throw error;
    }
};
