import React, { useState, useEffect } from "react";
import { PaymentMethod } from "../../../common/interfaces/IPaymentMethod";

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
  const [selectedMethod, setSelectedMethod] = useState<string | null>(null);
  const [mxnAmount, setMxnAmount] = useState<number>(0);
  const [usdAmount, setUsdAmount] = useState<number>(0);
  const [cardAmount, setCardAmount] = useState<number>(0);
  const [roomAmount, setRoomAmount] = useState<number>(0);
  const [change, setChange] = useState<number>(0);
  const [totalUsd, setTotalUsd] = useState<number>(0);

  const usdExchangeRate = 20;

  useEffect(() => {
    if (isOpen || selectedMethod) {
      setMxnAmount(0);
      setUsdAmount(0);
      setCardAmount(0);
      setRoomAmount(0);
    }
  }, [isOpen, selectedMethod]);

  useEffect(() => {
    const totalPaid =
      mxnAmount + usdAmount * usdExchangeRate + cardAmount + roomAmount;
    const newChange = totalPaid - method.total;
    setChange(newChange > 0 ? newChange : 0);
    setTotalUsd(method.total / usdExchangeRate);
  }, [mxnAmount, usdAmount, cardAmount, roomAmount, method.total]);

  const handleAmountChange = (type: string, value: number | string) => {
    let updatedValue = parseFloat(value as string);
    updatedValue = isNaN(updatedValue) ? 0 : updatedValue;

    switch (type) {
      case "mxn":
        setMxnAmount(updatedValue);
        break;
      case "usd":
        setUsdAmount(updatedValue);
        break;
      case "card":
        setCardAmount(updatedValue);
        break;
      case "room":
        setRoomAmount(updatedValue);
        break;
      default:
        break;
    }
  };

  const renderPaymentButtons = () => {
    if (!selectedMethod) {
      return (
        <div className="grid grid-cols-2 gap-4 mt-6 justify-center">
          <button
            onClick={() => setSelectedMethod("MXN")}
            className={`py-2 rounded-md ${
              selectedMethod === "MXN" ? "bg-teal-500 text-white" : "bg-white"
            } shadow-md border border-gray-300 hover:bg-gray-200 flex items-center gap-2 px-6`}
          >
            <i className="fas fa-money-bill" style={{ color: "#8FD798" }}></i> MXN
          </button>
          <button
            onClick={() => setSelectedMethod("USD")}
            className={`py-2 rounded-md ${
              selectedMethod === "USD" ? "bg-teal-500 text-white" : "bg-white"
            } shadow-md border border-gray-300 hover:bg-gray-200 flex items-center gap-2 px-6`}
          >
            <i className="fas fa-dollar-sign" style={{ color: "#8FD798" }}></i> USD
          </button>
          <button
            onClick={() => setSelectedMethod("Tarjeta")}
            className={`py-2 rounded-md ${
              selectedMethod === "Tarjeta" ? "bg-teal-500 text-white" : "bg-white"
            } shadow-md border border-gray-300 hover:bg-gray-200 flex items-center gap-2 px-6`}
          >
            <i className="fas fa-credit-card" style={{ color: "#4A90E2" }}></i> Tarjeta
          </button>
          <button
            onClick={() => setSelectedMethod("CargoHab")}
            className={`py-2 rounded-md ${
              selectedMethod === "CargoHab" ? "bg-teal-500 text-white" : "bg-white"
            } shadow-md border border-gray-300 hover:bg-gray-200 flex items-center gap-2 px-6`}
          >
            <i className="fas fa-hotel" style={{ color: "#F4A261" }}></i> Cargo Hab.
          </button>
          <button
            onClick={() => setSelectedMethod("Mixto")}
            className={`py-2 rounded-md ${
              selectedMethod === "Mixto" || selectedMethod === null
                ? "bg-[#1C878F] text-white"
                : "bg-white"
            } shadow-md border border-gray-300 hover:bg-gray-200 flex items-center gap-2 px-6`}
          >
            Mixto
          </button>
        </div>
      );
    }
    return null;
  };

  const renderSelectedMethodFields = () => {
    switch (selectedMethod) {
      case "Mixto":
        return (
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
              <label className="block text-gray-700">MXN Monto:</label>
              <div className="flex items-center border border-gray-300 rounded-md p-2">
                <i className="fas fa-money-bill mr-2" style={{ color: "#8FD798" }}></i>
                <input
                  type="number"
                  value={mxnAmount || ""}
                  placeholder="MXN"
                  className="w-full focus:ring-2 focus:ring-teal-500"
                  onChange={(e) => handleAmountChange("mxn", e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700">USD Monto:</label>
              <div className="flex items-center border border-gray-300 rounded-md p-2">
                <i className="fas fa-dollar-sign mr-2" style={{ color: "#8FD798" }}></i>
                <input
                  type="number"
                  value={usdAmount || ""}
                  placeholder="USD"
                  className="w-full focus:ring-2 focus:ring-teal-500"
                  onChange={(e) => handleAmountChange("usd", e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Tarjeta Referencia:</label>
              <div className="flex items-center border border-gray-300 rounded-md p-2">
                <i className="fas fa-credit-card mr-2" style={{ color: "#4A90E2" }}></i>
                <input
                  type="text"
                  value={method.cardNumber || ""}
                  placeholder="Referencia Tarjeta"
                  className="w-full focus:ring-2 focus:ring-teal-500"
                  onChange={(e) => updateMethod("cardNumber", e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Monto Tarjeta:</label>
              <input
                type="number"
                value={cardAmount || ""}
                placeholder="Monto Tarjeta"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
                onChange={(e) => handleAmountChange("card", e.target.value)}
              />
            </div>
            <div>
              <label className="block text-gray-700">No. Habitación:</label>
              <div className="flex items-center border border-gray-300 rounded-md p-2">
                <i className="fas fa-hotel mr-2" style={{ color: "#F4A261" }}></i>
                <input
                  type="text"
                  value={method.roomNumber || ""}
                  placeholder="Número Habitación"
                  className="w-full focus:ring-2 focus:ring-teal-500"
                  onChange={(e) => updateMethod("roomNumber", e.target.value)}
                />
              </div>
            </div>
            <div>
              <label className="block text-gray-700">Monto Habitación:</label>
              <input
                type="number"
                value={roomAmount || ""}
                placeholder="Monto Habitación"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
                onChange={(e) => handleAmountChange("room", e.target.value)}
              />
            </div>
          </div>
        );

      case "MXN":
        return (
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
              <label className="block text-gray-700">Total a Pagar:</label>
              <input
                readOnly
                value={`$${method.total.toFixed(2)}`}
                className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-gray-700">Cambio:</label>
              <input
                readOnly
                value={`$${change.toFixed(2)}`}
                className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-gray-700">MXN Monto:</label>
              <input
                type="number"
                value={mxnAmount || ""}
                placeholder="Ingresa monto en MXN"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
                onChange={(e) => handleAmountChange("mxn", e.target.value)}
              />
            </div>
          </div>
        );

      case "USD":
        return (
          <div className="grid grid-cols-2 gap-4 mt-6">
            <div>
              <label className="block text-gray-700">Total en USD:</label>
              <input
                readOnly
                value={`$${totalUsd.toFixed(2)}`}
                className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-gray-700">Cambio:</label>
              <input
                readOnly
                value={`$${change.toFixed(2)}`}
                className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
              />
            </div>
            <div>
              <label className="block text-gray-700">USD Monto:</label>
              <input
                type="number"
                value={usdAmount || ""}
                placeholder="Ingresa monto en USD"
                className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
                onChange={(e) => handleAmountChange("usd", e.target.value)}
              />
            </div>
          </div>
        );

      case "Tarjeta":
        return (
          <div className="mt-6">
            <label className="block text-gray-700">Referencia de Tarjeta:</label>
            <input
              type="text"
              value={method.cardNumber || ""}
              placeholder="Referencia de Tarjeta"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
              onChange={(e) => updateMethod("cardNumber", e.target.value)}
            />
          </div>
        );

      case "CargoHab":
        return (
          <div className="mt-6">
            <label className="block text-gray-700">No. Habitación:</label>
            <input
              type="text"
              value={method.roomNumber || ""}
              placeholder="Número de Habitación"
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-teal-500"
              onChange={(e) => updateMethod("roomNumber", e.target.value)}
            />
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

        {selectedMethod === "Mixto" && (
          <div className="grid grid-cols-3 gap-4 mb-4">
            <div>
              <label className="block text-gray-700">Total a Pagar:</label>
              <input
                readOnly
                value={`$${method.total.toFixed(2)}`}
                className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
              />
            </div>

            <div>
              <label className="block text-gray-700">Total en USD:</label>
              <input
                readOnly
                value={`$${totalUsd.toFixed(2)}`}
                className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
              />
            </div>

            <div>
              <label className="block text-gray-700">Cambio:</label>
              <input
                readOnly
                value={`$${change.toFixed(2)}`}
                className="w-full p-2 border border-gray-300 rounded-md bg-gray-100"
              />
            </div>
          </div>
        )}

        {renderPaymentButtons()}

        {renderSelectedMethodFields()}

        <div className="flex justify-end space-x-4 mt-6">
          {selectedMethod ? (
            <>
              <button
                onClick={() => onPay(method)}
                className="px-4 py-2 bg-[#1C878F] text-white rounded-md shadow-md hover:bg-teal-600"
              >
                PAGAR
              </button>
              <button
                onClick={() => setSelectedMethod(null)}
                className="px-4 py-2 bg-gray-300 rounded-md hover:bg-gray-400"
              >
                CANCELAR
              </button>
            </>
          ) : (
            <button onClick={onClose} className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600">
              CERRAR
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalPago;
