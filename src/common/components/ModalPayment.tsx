import React, { useState, useEffect } from "react";
import { PaymentMethod } from "../interfaces/IPaymentMethod";

interface ModalPagoProps {
  isOpen: boolean;
  onClose: () => void;
  method: PaymentMethod;
  onPay: (method: PaymentMethod) => void;
  updateMethod: (field: string, value: string | number) => void;
}

const ModalPago: React.FC<ModalPagoProps> = ({
  isOpen,
  onClose,
  method,
  onPay,
  updateMethod,
}) => {
  const usdExchangeRate = 20; // Ajusta esta tasa según sea necesario

  useEffect(() => {
    calculateChange();
  }, [method.mxnAmount, method.usdAmount, method.cardAmount, method.roomAmount]);

  const calculateChange = () => {
    const totalPaid =
      (method.mxnAmount || 0) +
      (method.usdAmount || 0) * usdExchangeRate +
      (method.cardAmount || 0) +
      (method.roomAmount || 0);
    
    const newChange = totalPaid - method.total;
    updateMethod('change', newChange > 0 ? newChange : 0);
  };

  const renderPaymentButtons = () => {
    return (
      <div className="grid grid-cols-2 gap-4 mt-6 justify-center">
        <button
          onClick={() => updateMethod('currency', 'MXN')}
          className={`py-2 rounded-md ${method.currency === "MXN" ? "bg-teal-500 text-white" : "bg-white"} shadow-md border border-gray-300 hover:bg-gray-200 flex items-center gap-2 px-6`}
        >
          <i className="fas fa-money-bill" style={{ color: "#8FD798" }}></i> MXN
        </button>
        <button
          onClick={() => updateMethod('currency', 'USD')}
          className={`py-2 rounded-md ${method.currency === "USD" ? "bg-teal-500 text-white" : "bg-white"} shadow-md border border-gray-300 hover:bg-gray-200 flex items-center gap-2 px-6`}
        >
          <i className="fas fa-dollar-sign" style={{ color: "#8FD798" }}></i> USD
        </button>
        <button
          onClick={() => updateMethod('currency', 'TARJETA')}
          className={`py-2 rounded-md ${method.currency === "TARJETA" ? "bg-teal-500 text-white" : "bg-white"} shadow-md border border-gray-300 hover:bg-gray-200 flex items-center gap-2 px-6`}
        >
          <i className="fas fa-credit-card" style={{ color: "#4A90E2" }}></i> Tarjeta
        </button>
        <button
          onClick={() => updateMethod('currency', 'CARGO_HAB')}
          className={`py-2 rounded-md ${method.currency === "CARGO_HAB" ? "bg-teal-500 text-white" : "bg-white"} shadow-md border border-gray-300 hover:bg-gray-200 flex items-center gap-2 px-6`}
        >
          <i className="fas fa-hotel" style={{ color: "#F4A261" }}></i> Cargo Hab.
        </button>
        <button
          onClick={() => updateMethod('currency', 'MIXTO')}
          className={`py-2 rounded-md ${method.currency === "MIXTO" ? "bg-[#1C878F] text-white" : "bg-white"} shadow-md border border-gray-300 hover:bg-gray-200 flex items-center gap-2 px-6`}
        >
          Mixto
        </button>
      </div>
    );
  };

  const renderSelectedMethodFields = () => {
    switch (method.currency) {
      case 'MXN':
        return (
          <div className="mt-6">
            <label className="block text-gray-700">Monto en MXN:</label>
            <input
              type="number"
              value={method.mxnAmount || 0}
              onChange={(e) => updateMethod('mxnAmount', parseFloat(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        );
      case 'USD':
        return (
          <div className="mt-6">
            <label className="block text-gray-700">Monto en USD:</label>
            <input
              type="number"
              value={method.usdAmount || 0}
              onChange={(e) => updateMethod('usdAmount', parseFloat(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        );
      case 'TARJETA':
        return (
          <div className="mt-6">
            <label className="block text-gray-700">Referencia Tarjeta:</label>
            <input
              type="text"
              value={method.cardNumber || ""}
              onChange={(e) => updateMethod('cardNumber', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <label className="block text-gray-700 mt-4">Monto Tarjeta:</label>
            <input
              type="number"
              value={method.cardAmount || 0}
              onChange={(e) => updateMethod('cardAmount', parseFloat(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        );
      case 'CARGO_HAB':
        return (
          <div className="mt-6">
            <label className="block text-gray-700">Número de Habitación:</label>
            <input
              type="text"
              value={method.roomNumber || ""}
              onChange={(e) => updateMethod('roomNumber', e.target.value)}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
            <label className="block text-gray-700 mt-4">Monto Habitación:</label>
            <input
              type="number"
              value={method.roomAmount || 0}
              onChange={(e) => updateMethod('roomAmount', parseFloat(e.target.value))}
              className="w-full p-2 border border-gray-300 rounded-md"
            />
          </div>
        );
      case 'MIXTO':
        return (
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
              <label className="block text-gray-700">Monto en MXN:</label>
              <input
                type="number"
                value={method.mxnAmount || 0}
                onChange={(e) => updateMethod('mxnAmount', parseFloat(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
            <div>
              <label className="block text-gray-700">Monto en USD:</label>
              <input
                type="number"
                value={method.usdAmount || 0}
                onChange={(e) => updateMethod('usdAmount', parseFloat(e.target.value))}
                className="w-full p-2 border border-gray-300 rounded-md"
              />
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className={`fixed inset-0 z-50 bg-gray-800 bg-opacity-50 ${isOpen ? 'block' : 'hidden'}`}>
      <div className="relative mx-auto my-16 bg-white rounded-lg shadow-lg max-w-lg p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-700">Elegir Método de Pago</h2>
          <button onClick={onClose} className="text-gray-500 hover:text-red-600">
            <i className="fas fa-times"></i>
          </button>
        </div>

        {renderPaymentButtons()}

        {renderSelectedMethodFields()}

        <div className="flex justify-end space-x-4 mt-6">
          <button
            onClick={() => onPay(method)}
            className="px-4 py-2 bg-[#1C878F] text-white rounded-md shadow-md hover:bg-teal-600"
          >
            PAGAR
          </button>
          <button
            onClick={onClose}
            className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
          >
            CERRAR
          </button>
        </div>
      </div>
    </div>
  );
};

export default ModalPago;
