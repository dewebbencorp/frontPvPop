import { connectionTest } from "../api/connectionTest";

export const login = async (Clav_Usr: string, contrasenia: string): Promise<any> => {
  try {
    const response = await connectionTest.post("/api/auth/login", {
      Clav_Usr: Clav_Usr.toUpperCase(),
      contrasenia: contrasenia
    }, {
      withCredentials: true
    });
    return response.data;
  } catch (error) {
    console.error("Error iniciando sesión:", error);
    throw error;
  }
};

export const confirmAuth= async (Clav_Usr: string, contrasenia: string): Promise<any> => {
  try {
    const response = await connectionTest.post("/api/auth/confirm-auth", {
      Clav_Usr: Clav_Usr.toUpperCase(),
      contrasenia: contrasenia
    }, {
      withCredentials: true
    });
    return response.data;
  } catch (error) {
    console.error("Error en la autorización:", error);
    throw error;
  }
};

export const verifyToken = async (): Promise<any> => {
  try {
    const response = await connectionTest.get("/api/auth/verify-token", {
      withCredentials: true
    });
    return response.data;
  } catch (error) {
    console.error("Error verificando token:", error);
    throw error;
  }
};

export const logout = async (): Promise<any> => {
  try {
    const response = await connectionTest.post("/api/auth/logout", {}, {
      withCredentials: true
    });
    return response.data;
  } catch (error) {
    console.error("Error cerrando sesión:", error);
    throw error;
  }
};
