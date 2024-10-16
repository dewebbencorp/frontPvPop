import React from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../../../common/layouts/MainLayout';
import LoadingSpinner from '../../../common/components/LoadingSpinner';
import ProductRow from './ProductRow';
import TotalRow from './TotalRow';
import useTicket from '../../../common/hooks/useTicket';
import  convertirNumeroATexto  from '../../../utils/converterNumberText'; // Asegúrate de que la ruta sea correcta

const Ticket: React.FC = () => {
  const { remision } = useParams<{ remision: string }>();
  const { ticket, loading, error } = useTicket(remision!);

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (!ticket) {
    return <p>No se encontró el ticket.</p>;
  }

  return (
    <MainLayout>
      <div className="flex justify-center items-center p-5">
        <div className="bg-white p-5 shadow-lg w-[80mm] text-xs">
          <div className="text-center text-sm font-bold">
            <strong>{ticket.tienda}</strong><br />
            {ticket.direccion_tienda}
          </div>
          <div className="text-center mt-2  text-xs">
            <strong>{ticket.ttp}</strong><br />
            Sucursal: HYATT POP<br />
            {ticket.direccion_sucursal}
          </div>
          <div className="text-center font-bold mt-2">
            {ticket.hora} - {ticket.fecha}
          </div>

          <div className="mt-4">
            <div>Remisión: {ticket.remision}</div>
            <div>VEN: {ticket.vendedor}</div>
            <div>Cajero: {ticket.cajero}</div>
          </div>

          <div className="text-center font-bold my-2">=======================</div>

          <div className="text-center font-bold">
            CLIENTE: {ticket.cliente}
          </div>

          <div className="text-center font-bold my-2">=======================</div>

          <div>
            {ticket.productos.map((producto, index) => (
              <ProductRow key={index} producto={producto} />
            ))}
          </div>

          <div className="text-center font-bold my-2">=======================</div>

          <div className="mb-2"> {convertirNumeroATexto(ticket.total)} </div>

          {/* Totales */}
          <div>
            <TotalRow label="IMPORTE" value={ticket.importe} />
            <TotalRow label="DESCUENTO" value={ticket.descuento} />
            <TotalRow label="SUBTOTAL" value={ticket.subtotal} />
            <TotalRow label="IVA" value={ticket.iva} />
            <TotalRow label="TOTAL" value={ticket.total} />
            <TotalRow label="PAGO" value={ticket.pago} />
            <TotalRow label="CAMBIO" value={ticket.cambio} />
          </div>

          <div className="text-center font-bold my-2">=======================</div>

          <div className="text-center">GRACIAS POR SU COMPRA</div>
          <div className="text-center">NO HAY DEVOLUCIONES DE EFECTIVO</div>
          <div className="text-center">FACTURAS UNICAMENTE EL DÍA DE SU COMPRA</div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Ticket;
