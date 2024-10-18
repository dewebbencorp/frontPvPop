import { useState, useEffect } from 'react';
import { obtenerTicketPorNumero } from '../../services/ticketService';

export interface Producto {
  descripcion: string;
  cantidad: number;
  precio_unitario: number;
  total: number;
}

export interface Ticket {
  tienda: string;
  direccion_tienda: string;
  ttp: string;
  sucursal: string;
  direccion_sucursal: string;
  fecha: string;
  hora: string;
  remision: string;
  vendedor: string;
  cajero: string;
  cliente: string;
  productos: Producto[];
  importe: number;
  descuento: number;
  subtotal: number;
  iva: number;
  total: number;
  pago: number;
  cambio: number;
}

// Hook personalizado para obtener un ticket
const useTicket = (remision: string) => {
  const [ticket, setTicket] = useState<Ticket | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const cargarTicket = async () => {
      try {
        const data = await obtenerTicketPorNumero(remision);
        setTicket(data);
      } catch (err) {
        setError('Error al cargar el ticket');
      } finally {
        setLoading(false);
      }
    };

    cargarTicket();
  }, [remision]);

  return { ticket, loading, error };
};

export default useTicket;
