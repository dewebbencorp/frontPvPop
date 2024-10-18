import React, { useState, useEffect, useRef } from "react";
import {
  IonInput,
  IonButton,
  IonIcon,
  IonCheckbox,
  IonRow,
  IonCol,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { documentOutline, close, checkmark } from "ionicons/icons";
import { useHistory } from "react-router-dom";
import MainLayout from "../../../common/layouts/MainLayout";
import useNavigationData from "../../../common/hooks/useNavigationData";
import {
  obtenerAuditorias,
  obtenerAuditoriasFiltradas,
  actualizarCX,
} from "../../../services/auditService";

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
  const [movimiento, setMovimiento] = useState("");
  const [desde, setDesde] = useState("");
  const [hasta, setHasta] = useState("");
  const [tipo, setTipo] = useState("");
  const [cliente, setCliente] = useState("");
  const { changeTitle } = useNavigationData();
  const history = useHistory();
  const lastItemRef = useRef<HTMLTableRowElement | null>(null);

  // const movimientos = ["RE", "CR"];
  const tipos = ["EF", "CR"];

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
      console.error("Error al actualizar CX:", error);
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
    setMovimiento("");
    setDesde("");
    setHasta("");
    setTipo("");
    setCliente("");

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
      <div className="bg-blue-50 p-5 rounded-lg">
        {/* Input Fields */}
        <div className="grid grid-cols-12 gap-4 mb-6">
          {/* <div className="col-span-4">
    <label className="block text-gray-700 mb-1 font-bold text-sm">Movimiento</label>
    <select
      value={movimiento}
      onChange={(e) => setMovimiento(e.target.value)}
      className="border border-gray-300 rounded-md p-2 w-full shadow-sm bg-white"
    >
      {movimientos.map((mov, index) => (
        <option key={index} value={mov}>
          {mov}
        </option>
      ))}
    </select>
  </div> */}

<div className="col-span-2">
    <label className="block text-gray-700 mb-1 font-bold text-sm">
      Desde
    </label>
    <input
      type="date"
      value={desde}
      onChange={(e) => setDesde(e.target.value)}
      className="border border-gray-300 rounded-md p-2 w-full shadow-sm"
    />
  </div>

  <div className="col-span-2">
    <label className="block text-gray-700 mb-1 font-bold text-sm">
      Hasta
    </label>
    <input
      type="date"
      value={hasta}
      onChange={(e) => setHasta(e.target.value)}
      className="border border-gray-300 rounded-md p-2 w-full shadow-sm"
    />
  </div>

  <div className="col-span-2">
    <label className="block text-gray-700 mb-1 font-bold text-sm">
      Tipo
    </label>
    <select
      value={tipo}
      onChange={(e) => setTipo(e.target.value)}
      className="border border-gray-300 rounded-md p-2 w-full shadow-sm bg-white"
    >
      {tipos.map((tp, index) => (
        <option key={index} value={tp}>
          {tp}
        </option>
      ))}
    </select>
  </div>

  <div className="col-span-3">
    <label className="block text-gray-700 mb-1 font-bold text-sm">
      Cliente
    </label>
    <input
      type="text"
      value={cliente}
      onChange={(e) => setCliente(e.target.value)}
      className="border border-gray-300 rounded-md p-2 w-full shadow-sm"
    />
  </div>

  <div className="col-span-3 flex justify-center items-end">
    <button
      onClick={handleBuscar}
      className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-md shadow-md transition text-[14pt]"
    >
      Buscar
    </button>
    <button
      onClick={handleLimpiar}
      className="ml-4 bg-red-500 hover:bg-red-600 text-white py-2 px-4 rounded-md shadow-md transition text-[14pt]"
    >
      Limpiar
    </button>
  </div>
</div>

        {/* Table */}
        <div className="overflow-x-auto rounded-lg shadow-[0rem_0.5rem_0.5rem_rgba(0,0,0,0.35)]">
          <div className="max-h-96 overflow-y-auto">
            <table className="min-w-full bg-white rounded-lg shadow-lg border-collapse">
              <thead className="sticky top-0 bg-myFriend-600 text-white z-10">
                {/* Sticky header */}
                <tr>
                  <th className="font-semibold text-sm text-white p-3 first:rounded-tl-lg last:rounded-tr-lg whitespace-nowrap">
                    REMISIÓN
                  </th>
                  <th className="font-semibold text-sm text-white p-3 text-center whitespace-nowrap">
                    FECHA
                  </th>
                  <th className="font-semibold text-sm text-white p-3 text-center whitespace-nowrap">
                    CLIENTE
                  </th>
                  {/* <th className="font-semibold text-sm text-white p-3 text-center whitespace-nowrap">
                    MOVIMIENTO
                  </th> */}
                  <th className="font-semibold text-sm text-white p-3 text-center whitespace-nowrap">
                    TIPO
                  </th>
                  <th className="font-semibold text-sm text-white p-3 text-center whitespace-nowrap">
                    TOTAL
                  </th>
                  <th className="p-3 font-semibold text-sm text-white">CX</th>
                  <th className="p-3 font-semibold text-sm text-white">CORT</th>
                  <th className="p-3 font-semibold text-sm text-white">COM</th>
                  <th className="font-semibold text-sm text-white p-3 text-center whitespace-nowrap">
                    ACCIONES
                  </th>
                </tr>
              </thead>
              <tbody>
                {filteredTickets.length > 0 ? (
                  filteredTickets.map((ticket, index) => (
                    <tr
                      key={index}
                      className={`text-center ${
                        index % 2 === 0 ? "bg-gray-100" : "bg-white"
                      } ${ticket.cx ? "bg-red-100" : ""}`}
                      ref={
                        index === filteredTickets.length - 1
                          ? lastItemRef
                          : null
                      }
                    >
                      <td className="text-gray-700 text-[12px] px-3 h-10 text-start">
                        {ticket.remision}
                      </td>
                      <td className="text-gray-700 text-[14px] px-3 h-10 text-center">
                        {ticket.fecha.split("T")[0]}
                      </td>
                      <td className="text-gray-700 text-[14px] px-3 h-10 text-center">
                        {ticket.cliente}
                      </td>
                      {/* <td className="text-gray-700 text-[14px] px-3 h-10 text-center">{ticket.movimiento}</td> */}
                      <td className="text-gray-700 text-[14px] px-3 h-10 text-center">
                        {ticket.tipo}
                      </td>
                      <td className="text-gray-700 text-[14px] px-3 h-10 text-center">
                        ${ticket.total}
                      </td>
                      <td className="p-3 text-center">
                        <IonCheckbox checked={ticket.cx} disabled />
                      </td>
                      <td className="p-3 text-center">
                        <IonCheckbox checked={ticket.cort} disabled />
                      </td>
                      <td className="p-3 text-center">
                        <IonCheckbox checked={!!ticket.com} disabled />
                      </td>
                      <td className="px-3 h-10 text-center">
                        <div className="flex justify-center items-center h-full gap-4">
                          <button
                            onClick={() => handleViewTicket(ticket.remision)}
                            className="bg-blue-500 hover:bg-blue-600 rounded-md text-white px-2 transition"
                          >
                            <IonIcon
                              aria-hidden="true"
                              icon={documentOutline}
                              className="h-6 items-center flex w-4"
                            />
                          </button>
                          <button
                            onClick={() => handleCancel(ticket.remision)}
                            className="bg-red-500 hover:bg-red-600 rounded-md text-white px-2 transition"
                          >
                            <IonIcon
                              aria-hidden="true"
                              icon={close}
                              className="h-6 items-center flex w-4"
                            />
                          </button>
                          <button
                            onClick={() => handleSuccess(ticket.remision)}
                            className="bg-green-500 hover:bg-green-600 rounded-md text-white px-2 transition"
                          >
                            <IonIcon
                              aria-hidden="true"
                              icon={checkmark}
                              className="h-6 items-center flex w-4"
                            />
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td colSpan={10} className="text-center p-4 text-gray-500">
                      No se encontraron datos
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default Audit;