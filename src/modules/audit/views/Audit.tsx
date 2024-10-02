import React, { useState } from 'react';
import { IonInput, IonButton, IonIcon } from '@ionic/react';
import { searchOutline, trashOutline, checkmarkCircleOutline, closeCircleOutline, documentOutline } from 'ionicons/icons';
import INavbarModule from '../../../common/interfaces/INavbarModule';
import MainLayout from '../../../common/layouts/MainLayout';
const Audit: React.FC = () => {
  const [tickets, setTickets] = useState([
    { remision: '137663', fecha: '20/01/2024', cliente: 'Cliente 1', tipo: 'EF', total: 1050.00 }
  ]);

  const navbarModules: INavbarModule[] = [
    { title: 'Ventas', path: '/ventas' },
    { title: 'Devolución', path: '/devolucion' },
    { title: 'Retiro', path: '/retiro' },
    { title: 'Cortes de Caja', path: '/cortes-caja' },
  ];

  return (
    <MainLayout navbarModules={navbarModules}>
      <div className="p-6 bg-gray-50">
        {/* Formulario de búsqueda */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block mb-2 text-sm font-bold">Movimiento:</label>
            <IonInput className="border p-2 rounded w-full" placeholder="Ingresa movimiento" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold">Tipo:</label>
            <IonInput className="border p-2 rounded w-full" placeholder="Ingresa movimiento" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold">Cliente:</label>
            <IonInput className="border p-2 rounded w-full" placeholder="Ingresa cliente" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold">Desde:</label>
            <IonInput className="border p-2 rounded w-full" type="date" />
          </div>
          <div>
            <label className="block mb-2 text-sm font-bold">Hasta:</label>
            <IonInput className="border p-2 rounded w-full" type="date" />
          </div>
        </div>

        <div className="flex space-x-4 mb-6">
          <IonButton fill="solid" className="footer-button">
            Buscar
          </IonButton>
          <IonButton fill="solid" className="footer-button">
            Limpiar
          </IonButton>
        </div>

        {/* Tabla de auditoría de ventas */}
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse bg-white rounded-lg shadow-md">
            <thead className="bg-tableHeader text-white">
              <tr>
                <th className="px-4 py-2 border border-tableBorder">Remisión</th>
                <th className="px-4 py-2 border border-tableBorder">Fecha</th>
                <th className="px-4 py-2 border border-tableBorder">Cliente</th>
                <th className="px-4 py-2 border border-tableBorder">Tipo</th>
                <th className="px-4 py-2 border border-tableBorder">Total</th>
                <th className="px-4 py-2 border border-tableBorder">Acciones</th>
              </tr>
            </thead>
            <tbody className="bg-tableBackground text-gray-700">
              {tickets.map((ticket, index) => (
                <tr key={index} className="text-center border border-tableBorder">
                  <td className="px-4 py-2">{ticket.remision}</td>
                  <td className="px-4 py-2">{ticket.fecha}</td>
                  <td className="px-4 py-2">{ticket.cliente}</td>
                  <td className="px-4 py-2">{ticket.tipo}</td>
                  <td className="px-4 py-2">${ticket.total}</td>
                  <td className="px-4 py-2 flex justify-center space-x-2">
                    <IonButton className="bg-actionIconBg.blue p-2 shadow-md">
                      <IonIcon icon={documentOutline} />
                    </IonButton>
                    <IonButton className="bg-actionIconBg.red p-2 shadow-md">
                      <IonIcon icon={trashOutline} />
                    </IonButton>
                    <IonButton className="bg-actionIconBg.green p-2 shadow-md">
                      <IonIcon icon={checkmarkCircleOutline} />
                    </IonButton>
                    <IonButton className="bg-actionIconBg.yellow p-2 shadow-md">
                      <IonIcon icon={closeCircleOutline} />
                    </IonButton>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  );
};

export default Audit;