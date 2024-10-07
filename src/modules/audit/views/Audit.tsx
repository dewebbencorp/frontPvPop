import React, { useState } from 'react';
import { IonInput, IonButton, IonIcon, IonCheckbox, IonRow, IonCol } from '@ionic/react';
import { documentOutline, checkmarkCircleOutline, closeCircleOutline } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import INavbarModule from '../../../common/interfaces/INavbarModule';
import MainLayout from '../../../common/layouts/MainLayout';
import '../../../theme/Audit.css';

const Audit: React.FC = () => {
  const [tickets, setTickets] = useState([
    { remision: '137663', fecha: '20/01/2024', cliente: 'Cliente 1', tipo: 'EF', total: 1050.00, cx: false, cort: true, com: false },
    { remision: '137663', fecha: '20/01/2024', cliente: 'Cliente 1', tipo: 'EF', total: 1050.00, cx: false, cort: true, com: false },
    { remision: '137663', fecha: '20/01/2024', cliente: 'Cliente 1', tipo: 'EF', total: 1050.00, cx: false, cort: true, com: false },
    { remision: '137663', fecha: '20/01/2024', cliente: 'Cliente 1', tipo: 'EF', total: 1050.00, cx: false, cort: true, com: false },
    { remision: '137663', fecha: '20/01/2024', cliente: 'Cliente 1', tipo: 'EF', total: 1050.00, cx: false, cort: true, com: false },
    { remision: '137663', fecha: '20/01/2024', cliente: 'Cliente 1', tipo: 'EF', total: 1050.00, cx: false, cort: true, com: false },
    { remision: '137663', fecha: '20/01/2024', cliente: 'Cliente 1', tipo: 'EF', total: 1050.00, cx: false, cort: true, com: false },
    { remision: '137663', fecha: '20/01/2024', cliente: 'Cliente 1', tipo: 'EF', total: 1050.00, cx: false, cort: true, com: false },
    { remision: '137663', fecha: '20/01/2024', cliente: 'Cliente 1', tipo: 'EF', total: 1050.00, cx: false, cort: true, com: false },
    { remision: '137663', fecha: '20/01/2024', cliente: 'Cliente 1', tipo: 'EF', total: 1050.00, cx: false, cort: true, com: false },

  ]);

  const history = useHistory();

  const handleViewTicket = (remision: string) => {
    history.push(`/ticket/${remision}`);
  };

  const navbarModules: INavbarModule[] = [
    { title: 'Ventas', path: '/ventas' },
    { title: 'Devolución', path: '/devolucion' },
    { title: 'Retiro', path: '/retiro' },
    { title: 'Cortes de Caja', path: '/cortes-caja' },
  ];

  return (
    <MainLayout>
      <div className="audit-container">
        <IonRow>


          <IonCol size="9" className="px-4 py-2">
            <div className="inputs-container">
              <div className="input-group">
                <label className="label">MOVIMIENTO:</label>
                <IonInput className="input" />
              </div>
              <div className="input-group">
                <label className="label">DESDE:</label>
                <IonInput className="input" type="date" />
              </div>
              <div className="input-group">
                <label className="label">HASTA:</label>
                <IonInput className="input" type="date" />
              </div>

              <div className="input-group">
                <label className="label">TIPO:</label>
                <IonInput className="input" />
              </div>
              <div className="input-group">
                <label className="label">CLIENTE:</label>
                <IonInput className="input" />
              </div>

            </div>
          </IonCol>
          <IonCol size="2" className="px-4 py-2">
            <div className="inputs-container">
              <div className="buttons-container">
                <IonButton className="buscar-button">Buscar</IonButton>
                <IonButton className="limpiar-button">Limpiar</IonButton>
              </div>
            </div>
          </IonCol>
        </IonRow>
        <div className="overflow-x-auto">
          <table className="min-w-full table-auto border-collapse bg-white rounded-lg shadow-md">
            <thead className="bg-tableHeader text-white">
              <tr>
                <th>REMISIÓN</th>
                <th>FECHA</th>
                <th>CLIENTE</th>
                <th>TIPO</th>
                <th>TOTAL</th>
                <th>CX</th>
                <th>CORT</th>
                <th>COM</th>
                <th>ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              {tickets.map((ticket, index) => (
                <tr key={index} className="text-center">
                  <td>{ticket.remision}</td>
                  <td>{ticket.fecha}</td>
                  <td>{ticket.cliente}</td>
                  <td>{ticket.tipo}</td>
                  <td>${ticket.total}</td>
                  <td><IonCheckbox checked={ticket.cx} /></td>
                  <td><IonCheckbox checked={ticket.cort} /></td>
                  <td><IonCheckbox checked={ticket.com} /></td>
                  <td>
                    <IonButton className='ticket-button' onClick={() => handleViewTicket(ticket.remision)}>
                      <IonIcon icon={documentOutline} />
                    </IonButton>
                    <IonButton className="close-button">
                      <IonIcon icon={closeCircleOutline} />
                    </IonButton>
                    <IonButton className="check-button">
                      <IonIcon icon={checkmarkCircleOutline} />
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
