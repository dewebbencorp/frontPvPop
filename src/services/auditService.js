// src/services/auditService.ts
import { connectionTest } from "../api/connectionTest";

// Función para obtener todas las auditorías
export const obtenerAuditorias = async () => {
    try {
        const response = await connectionTest.get("/api/audit");
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
        const response = await connectionTest.get("/api/audit/filtro", {  // URL corregida aquí
            params: filtros  // Pasamos los filtros como parámetros de la URL
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
        const response = await connectionTest.patch(`/api/audit/${remision}/cx`, { cx });
        console.log("CX actualizado:", response.data);
        return response.data;
    } catch (error) {
        console.error("Error actualizando CX:", error);
        throw error;
    }
};
