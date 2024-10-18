import { connectionTest } from "../api/connectionTest";

// Función para buscar un artículo por clave
export const buscarArticulo = async (clave: string): Promise<any> => {
  try {
    const response = await connectionTest.get(`/api/sales/articulo/${clave}`, {
      withCredentials: true,
    });
    return response.data;
  } catch (error: unknown) {
    // Verificamos si el error es de tipo AxiosError (o un objeto con la propiedad response)
    if (isAxiosError(error)) {
      if (error.response && error.response.status === 404) {
        console.error("Artículo no encontrado");
        return null;
      } else {
        console.error("Error buscando el artículo:", error.message);
      }
    } else {
      console.error("Error inesperado:", error);
    }
    throw error;
  }
};

// Función para agregar una venta
export const agregarVenta = async (venta: any): Promise<any> => {
  try {
    const response = await connectionTest.post("/api/sales", venta, {
      withCredentials: true,
    });
    return response.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      console.error("Error agregando la venta:", error.message);
    } else {
      console.error("Error inesperado:", error);
    }
    throw error;
  }
};

// Función para obtener todas las ventas
export const obtenerVentas = async (): Promise<any> => {
  try {
    const response = await connectionTest.get("/api/sales", {
      withCredentials: true,
    });
    return response.data;
  } catch (error: unknown) {
    if (isAxiosError(error)) {
      console.error("Error obteniendo las ventas:", error.message);
    } else {
      console.error("Error inesperado:", error);
    }
    throw error;
  }
};

// Helper para verificar si el error es de Axios
function isAxiosError(error: unknown): error is { response: { status: number }; message: string } {
  return typeof error === "object" && error !== null && "response" in error && "message" in error;
}
