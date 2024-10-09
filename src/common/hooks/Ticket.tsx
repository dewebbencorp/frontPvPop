import React from 'react';
import { useParams } from 'react-router-dom';
import '../../theme/Ticket.css'; 
import INavbarModule from '../interfaces/INavbarModule';
import MainLayout from '../layouts/MainLayout';
const Ticket: React.FC = () => {
  const { remision } = useParams<{ remision: string }>(); 

  const ticket = {
    tienda: 'TIENDAS TURISTICAS DE LA PENINSULA SA DE CV',
    direccion: 'LUIS DONALDO COLOSIO, SMZ 308, MZ 02, LOTE 32, NO INT 101, NO EXT S/N, CP 77569, CANCUN, QUINTANA ROO, MEXICO',
    ttp: 'TTP061206SX6',
    sucursal: 'MINI SUPER RIU CARIBE',
    direccion_sucursal: 'BLD KUKULKAN KM 5.5 BAJOS HOTEL RIU CARIBE',
    fecha: '27/09/2024',
    hora: '11:08:00 a.m.',
    remision: '174658',
    vendedor: '7',
    cajero: 'FERNANDOMC',
    cliente: 'PUBLICO EN GENERAL',
    productos: [
      { descripcion: 'AUSTRALIAN LE', cantidad: 1, precio_unitario: 241.38, total: 241.38 },
      { descripcion: 'KUALI PLUMA M', cantidad: 1, precio_unitario: 86.21, total: 86.21 },
      { descripcion: 'KUALI PLUMA M', cantidad: 1, precio_unitario: 86.21, total: 86.21 },
      { descripcion: 'KUALI PLUMA M', cantidad: 1, precio_unitario: 86.21, total: 86.21 },
      { descripcion: 'KUALI PLUMA M', cantidad: 1, precio_unitario: 86.21, total: 86.21 },
      { descripcion: 'KUALI PLUMA M', cantidad: 1, precio_unitario: 86.21, total: 86.21 },
      { descripcion: 'KUALI PLUMA M', cantidad: 1, precio_unitario: 86.21, total: 86.21 },
      { descripcion: 'KUALI PLUMA M', cantidad: 1, precio_unitario: 86.21, total: 86.21 },
    ],
    importe: 327.59,
    descuento: 0.00,
    subtotal: 327.59,
    iva: 52.41,
    ieps: 0.00,
    total: 380.00,
    pago: 380.00,
    cambio: 0.00,
  };

  const navbarModules: INavbarModule[] = [
    { title: 'Ventas', path: '/ventas' },
    { title: 'Devolución', path: '/devolucion' },
    { title: 'Retiro', path: '/retiro' },
    { title: 'Cortes de Caja', path: '/cortes-caja' },
  ];

  return (
    <MainLayout>
    <div className="container">
      
      <div className="receipt">
      {/* <h1 className="logo"><img src="http://myfriend.mx/images/logo.png" className="address center" style={{ maxWidth: '100px', maxHeight: '150px' }} /></h1> */}
        <div className="address center">
          <strong>{ticket.tienda}</strong><br />
          {ticket.direccion}
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
        <div className="center bold">CLIENTE: 1</div>
        <div className="center">{ticket.cliente}</div>
        <div className="center bold">
          *******************************************************
        </div>
        <div className='table-descripcion'>
          <div className="table-row">
            <span>CANT</span> <span>DESCR</span> <span>PUNIT</span> <span>TOT</span>
          </div>
        {ticket.productos.map((producto, index) => (
          <div key={index} className="table-row">
            <span>{producto.cantidad}</span> 
            <span>{producto.descripcion}</span> 
            <span>${producto.precio_unitario.toFixed(2)}</span> 
            <span>${producto.total.toFixed(2)}</span>
          </div>
        ))}
        </div>
       <div className='content-total'>
       <div className="total">
          <div className="center bold">Son: trescientos ochenta pesos 00/100 m.n.</div>
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