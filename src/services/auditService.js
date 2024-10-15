import { connectionTest } from "../api/connectionTest";

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

export const obtenerAuditoriasFiltradas = async (filtros) => {
  try {
    const response = await connectionTest.get("/api/audit/filtro", { params: filtros });
    console.log("Datos de auditorías filtradas:", response.data);
    return response.data;
  } catch (error) {
    console.error("Error obteniendo auditorías filtradas:", error);
    throw error;
  }
};

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
