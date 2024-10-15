// src/pages/Ticket.tsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import '../../theme/Ticket.css';
import { obtenerTicketPorNumero } from "../../services/ticketService";
import LoadingSpinner from '../../common/components/LoadingSpinner';
// Interfaz para la estructura del ticket
interface Producto {
    descripcion: string;
    cantidad: number;
    precio_unitario: number;
    total: number;
}

interface Ticket {
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
    ieps: number;
    total: number;
    pago: number;
    cambio: number;
}


const Ticket: React.FC = () => {
    const { remision } = useParams<{ remision: string }>();
    const [ticket, setTicket] = useState<Ticket | null>(null);

    useEffect(() => {
        const cargarTicket = async () => {
            try {
                const data = await obtenerTicketPorNumero(remision);
                setTicket(data);
            } catch (error) {
                console.error("Error al cargar el ticket:", error);
            }
        };

        cargarTicket();
    }, [remision]);

    if (!ticket) {
        return <p>fallback={<LoadingSpinner />}</p>;
    }

    return (
        <MainLayout>
            <div className="container">
                <div className="receipt">
                    <div className="address center">
                        <strong>{ticket.tienda}</strong><br />
                        {ticket.direccion_tienda}
                    </div>
                    <div className="center">
                        <strong>{ticket.ttp}</strong>
                        <div className="center">Sucursal: {ticket.sucursal}</div>
                        <div className="center">{ticket.direccion_sucursal}</div>
                    </div>
                    <div className="center bold">
                        <div className="center">{ticket.hora} {ticket.fecha}</div>
                    </div>
                    <div className="transactionDetails">
                        <div className='transactio'>Remisión: {ticket.remision}</div>
                        <div className='transactio'>VEN: {ticket.vendedor}</div>
                        <div className='transactio'>Cajero: {ticket.cajero}</div>
                    </div>
                    <div className="center bold">
                        *******************************************************
                    </div>
                    <div className="center bold">CLIENTE: {ticket.cliente}</div>
                    <div className="center bold">
                        *******************************************************
                    </div>
                    <div className="table-descripcion">
                        {ticket.productos.map((producto, index) => (
                            <div key={index} className="table-row">
                                <div className='descrip'>
                                    <div className="row-top">
                                        <span className='encabezados'>CANT</span>
                                        <span className='encabezados'>DESCR</span>
                                    </div>
                                    <div className="row-top">
                                        <span >{producto.cantidad}</span>
                                        <span >{producto.descripcion}</span>
                                    </div>
                                </div>
                                <div className='totals'>
                                    <div className="row-bottom">
                                        <span className='encabezados'>PUNIT</span>
                                        <span className='encabezados'>TOT</span>
                                    </div>
                                    <div className="row-bottom">
                                        <span>${producto.precio_unitario.toFixed(2)}</span>
                                        <span>${producto.total.toFixed(2)}</span>
                                    </div>
                                </div>

                                <div className="producto-separator"></div>
                            </div>
                        ))}
                    </div>
                    <div className="center bold">
                        *******************************************************
                    </div>

                    <div className='content-total'>
                        <div className="total">
                            <div className="center bold">Son: {ticket.total} pesos m.n.</div>
                        </div>
                        <div className="paymentDetails">
                            <div className="detail">IMPORTE:</div>
                            <div className="detail">${ticket.importe.toFixed(2)}</div>
                        </div>
                        <div className="paymentDetails">
                            <div className="detail">DESCUENTO:</div>
                            <div className="detail">${ticket.descuento.toFixed(2)}</div>
                        </div>
                        <div className="paymentDetails">
                            <div className="detail">SUBTOTAL:</div>
                            <div className="detail">${ticket.subtotal.toFixed(2)}</div>
                        </div>
                        <div className="paymentDetails">
                            <div className="detail">IVA:</div>
                            <div className="detail">${ticket.iva.toFixed(2)}</div>
                        </div>
                        <div className="paymentDetails">
                            <div className="detail">TOTAL:</div>
                            <div className="detail">${ticket.total.toFixed(2)}</div>
                        </div>
                        <div className="paymentDetails">
                            <div className="detail">PAGO:</div>
                            <div className="detail">${ticket.pago.toFixed(2)}</div>
                        </div>
                        <div className="paymentDetails">
                            <div className="detail">CAMBIO:</div>
                            <div className="detail">${ticket.cambio.toFixed(2)}</div>
                        </div>
                    </div>
                    <div className="center bold">
                        *******************************************************
                    </div>
                    <div className="center">GRACIAS POR SU COMPRA</div>
                    <div className="center">NO HAY DEVOLUCIONES DE EFECTIVO</div>
                    <div className="center">FACTURAS UNICAMENTE EL DIA DE SU COMPRA</div>
                </div>
            </div>
        </MainLayout>
    );
};

export default Ticket;
