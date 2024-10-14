import { connectionTest } from "../api/connectionTest";

// Función para  todas las auditorías
export const obtenerAuditorias = async () => {
    try {
        const response = await connectionTest.get("/api/audit", {
            withCredentials: true  // Enviar cookies con la solicitud
        });
        console.log("Datos de auditorías:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error obteniendo auditorías:", error);
        throw error;
    }
};

// Función para obtener auditorías filtradas
export const obtenerAuditoriasFiltradas = async (filtros) => {
    try {
        const response = await connectionTest.get("/api/audit/filtro", {
            params: filtros,
            withCredentials: true
        });
        console.log("Datos de auditorías filtradas:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error obteniendo auditorías filtradas:", error);
        throw error;
    }
};

// Función para actualizar el campo CX de una auditoría específica
export const actualizarCX = async (remision, cx) => {
    try {
        const response = await connectionTest.patch(`/api/audit/${remision}/cx`, { cx }, {
            withCredentials: true  // Enviar cookies con la solicitud
        });
        console.log("CX actualizado:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error actualizando CX:", error);
        throw error;
    }
};
