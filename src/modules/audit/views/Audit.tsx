import React, { useState, useEffect } from 'react';
import { IonInput, IonButton, IonIcon, IonCheckbox, IonRow, IonCol, IonSelect, IonSelectOption } from '@ionic/react';
import { documentOutline, close, checkmark } from 'ionicons/icons';
import { useHistory } from 'react-router-dom';
import MainLayout from '../../../common/layouts/MainLayout';
import '../../../theme/Audit.css';
import useNavigationData from '../../../common/hooks/useNavigationData';
import { obtenerAuditorias, obtenerAuditoriasFiltradas, actualizarCX } from '../../../services/auditService';

interface Auditoria {
  remision: string;
  fecha: string;
  cliente: string;
  tipo: string;
  movimiento: string;
  total: number;
  cx: boolean;
  cort: boolean;
  com: number;
  vendedor: string;
}

const Audit: React.FC = () => {
  const [tickets, setTickets] = useState<Auditoria[]>([]);
  const [filteredTickets, setFilteredTickets] = useState<Auditoria[]>([]);
  const [movimiento, setMovimiento] = useState('');
  const [desde, setDesde] = useState('');
  const [hasta, setHasta] = useState('');
  const [tipo, setTipo] = useState('');
  const [cliente, setCliente] = useState('');
  const { changeTitle } = useNavigationData();
  const history = useHistory();

  const movimientos = ["RE", "CR"]; // Opciones de Movimiento (ejemplo)
  const tipos = ["EF", "CR"]; // Opciones de Tipo (ejemplo)

  const handleViewTicket = (remision: string) => {
    history.push(`/ticket/${remision}`);
  };

  const handleToggleCX = async (remision: string, cxValue: boolean) => {
    try {
      await actualizarCX(remision, cxValue);
      setTickets((prevTickets) =>
        prevTickets.map((ticket) =>
          ticket.remision === remision ? { ...ticket, cx: cxValue } : ticket
        )
      );
      setFilteredTickets((prevFiltered) =>
        prevFiltered.map((ticket) =>
          ticket.remision === remision ? { ...ticket, cx: cxValue } : ticket
        )
      );
    } catch (error) {
      console.error('Error al actualizar CX:', error);
    }
  };

  const handleCancel = (remision: string) => {
    handleToggleCX(remision, true);
  };

  const handleSuccess = (remision: string) => {
    handleToggleCX(remision, false);
  };

  const handleBuscar = async () => {
    const filtros = {
      movimiento: movimiento || null,
      tipo: tipo || null,
      desde: desde || null,
      hasta: hasta || null,
      cliente: cliente || null,
    };
  
    try {
      const data = await obtenerAuditoriasFiltradas(filtros);
      setFilteredTickets(data);
    } catch (error) {
      console.error("Error al buscar auditorías:", error);
    }
  };
  


  const handleLimpiar = async () => {
    setMovimiento('');
    setDesde('');
    setHasta('');
    setTipo('');
    setCliente('');

    try {
      const data = await obtenerAuditorias();
      setTickets(data);
      setFilteredTickets(data);
    } catch (error) {
      console.error("Error al cargar todas las auditorías:", error);
    }
  };

  useEffect(() => {
    changeTitle("Auditorías");

    const cargarAuditorias = async () => {
      try {
        const data = await obtenerAuditorias();
        setTickets(data);
        setFilteredTickets(data);
      } catch (error) {
        console.error("Error al cargar las auditorías:", error);
        setTickets([]);
        setFilteredTickets([]);
      }
    };

    cargarAuditorias();
  }, []);

  return (
    <MainLayout>
      <div className="audit-container">
        {/* Input Fields */}
        <IonRow>
          <IonCol size="9" className="px-4 py-2">
            <div className="inputs-container">
              {/* <div className="input-group">
                <label className="label">MOVIMIENTO:</label>
                <IonSelect mode='ios' value={movimiento} onIonChange={(e) => setMovimiento(e.detail.value)} className="select">
                  {movimientos.map((mov, index) => (
                    <IonSelectOption key={index} value={mov}>{mov}</IonSelectOption>
                  ))}
                </IonSelect>
              </div> */}
              <div className="input-group">
                <label className="label">DESDE:</label>
                <IonInput value={desde} onIonChange={(e) => setDesde(e.detail.value!)} className="input" type="date" />
              </div>
              <div className="input-group">
                <label className="label">HASTA:</label>
                <IonInput value={hasta} onIonChange={(e) => setHasta(e.detail.value!)} className="input" type="date" />
              </div>
              <div className="input-group">
                <label className="label">TIPO:</label>
                <IonSelect mode='ios' value={tipo} onIonChange={(e) => setTipo(e.detail.value)} className="select">
                  {tipos.map((tp, index) => (
                    <IonSelectOption key={index} value={tp}>{tp}</IonSelectOption>
                  ))}
                </IonSelect>
              </div>
              <div className="input-group">
                <label className="label">CLIENTE:</label>
                <IonInput  value={cliente} onIonChange={(e) => setCliente(e.detail.value!)} className="input" />
              </div>
            </div>
          </IonCol>
          <IonCol size="2" className="px-4 py-2">
            <div className="inputs-container">
              <div className="buttons-container">
                <IonButton onClick={handleBuscar} className="buscar-button">Buscar</IonButton>
                <IonButton onClick={handleLimpiar} className="limpiar-button">Limpiar</IonButton>
              </div>
            </div>
          </IonCol>
        </IonRow>

        {/* Table */}
        <div className="overflow-x-auto table_complete">
          <table className="capsule min-w-full table-auto border-collapse bg-white rounded-lg shadow-md">
            <thead className="bg-tableHeader text-white">
              <tr>
                <th>REMISIÓN</th>
                <th>FECHA</th>
                <th>CLIENTE</th>
                {/* <th>MOV.</th> */}
                <th>TIPO</th>
                <th>TOTAL</th>
                <th>CX</th>
                <th>CORT</th>
                <th>COM</th>
                <th>ACCIONES</th>
              </tr>
            </thead>
            <tbody>
              {filteredTickets.length > 0 ? (
                filteredTickets.map((ticket, index) => (
                  <tr
                    key={index}
                    className={`text-center ${ticket.cx ? 'bg-red-100' : ''}`}
                  >
                    <td>{ticket.remision}</td>
                    <td>{ticket.fecha.split('T')[0]}</td>
                    <td>{ticket.cliente}</td>
                    {/* <td>{ticket.movimiento}</td> */}
                    <td>{ticket.tipo}</td>
                    <td>${ticket.total}</td>
                    <td><IonCheckbox checked={ticket.cx} disabled /></td>
                    <td><IonCheckbox checked={ticket.cort} disabled /></td>
                    <td><IonCheckbox checked={!!ticket.com} disabled /></td>
                    <td>
                      <IonButton  className="ticket-button" onClick={() => handleViewTicket(ticket.remision)}>
                        <IonIcon icon={documentOutline} className="h-4 items-center flex w-4" />
                      </IonButton>
                      <IonButton className="close-button" onClick={() => handleCancel(ticket.remision)}>
                        <IonIcon icon={close} className="h-4 items-center flex w-4" />
                      </IonButton>
                      <IonButton className="check-button" onClick={() => handleSuccess(ticket.remision)}>
                        <IonIcon icon={checkmark} className="h-4 items-center flex w-4" />
                      </IonButton>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={10} className="text-center">No se encontraron datos</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </MainLayout>
  );
};

export default Audit;
