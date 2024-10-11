import React from "react";
import { IPaymentMethod } from "../../../../common/interfaces/IPaymentMethod";

interface PaymentMethodFieldsProps {
  selectedMethod: string | null;
  mxnAmount: number;
  usdAmount: number;
  cardAmount: number;
  roomAmount: number;
  change: number;
  totalUsd: number;
  handleAmountChange: (type: string, value: number | string) => void;
  method: IPaymentMethod;
  updateMethod: (field: string, value: string | number) => void;
}

const PaymentMethodFields: React.FC<PaymentMethodFieldsProps> = ({
  selectedMethod,
  mxnAmount,
  usdAmount,
  cardAmount,
  roomAmount,
  change,
  totalUsd,
  handleAmountChange,
  method,
  updateMethod,
}) => {
  switch (selectedMethod) {
    case "Mixto":
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
            <div className="flex items-center border border-gray-300 rounded-md p-2">
              <i
                className="fas fa-money-bill mr-2"
                style={{ color: "#8FD798" }}
              ></i>
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
              <i
                className="fas fa-dollar-sign mr-2"
                style={{ color: "#8FD798" }}
              ></i>
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
              <i
                className="fas fa-credit-card mr-2"
                style={{ color: "#4A90E2" }}
              ></i>
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

export default PaymentMethodFields;
