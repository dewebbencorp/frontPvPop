import React from "react";

interface PaymentMethodButtonsProps {
  selectedMethod: string | null;
  onSelectMethod: (method: string) => void;
}

const PaymentMethodButtons: React.FC<PaymentMethodButtonsProps> = ({
  selectedMethod,
  onSelectMethod,
}) => {
  return (
    <div className="grid grid-cols-2 gap-4 mt-6 justify-center">
      <button
        onClick={() => onSelectMethod("MXN")}
        className={`py-2 rounded-md ${
          selectedMethod === "MXN" ? "bg-teal-500 text-white" : "bg-white"
        } shadow-md border border-gray-300 hover:bg-gray-200 flex items-center gap-2 px-6`}
      >
        <i className="fas fa-money-bill" style={{ color: "#8FD798" }}></i> MXN
      </button>
      <button
        onClick={() => onSelectMethod("USD")}
        className={`py-2 rounded-md ${
          selectedMethod === "USD" ? "bg-teal-500 text-white" : "bg-white"
        } shadow-md border border-gray-300 hover:bg-gray-200 flex items-center gap-2 px-6`}
      >
        <i className="fas fa-dollar-sign" style={{ color: "#8FD798" }}></i> USD
      </button>
      <button
        onClick={() => onSelectMethod("Tarjeta")}
        className={`py-2 rounded-md ${
          selectedMethod === "Tarjeta" ? "bg-teal-500 text-white" : "bg-white"
        } shadow-md border border-gray-300 hover:bg-gray-200 flex items-center gap-2 px-6`}
      >
        <i className="fas fa-credit-card" style={{ color: "#4A90E2" }}></i>{" "}
        Tarjeta
      </button>
      <button
        onClick={() => onSelectMethod("CargoHab")}
        className={`py-2 rounded-md ${
          selectedMethod === "CargoHab" ? "bg-teal-500 text-white" : "bg-white"
        } shadow-md border border-gray-300 hover:bg-gray-200 flex items-center gap-2 px-6`}
      >
        <i className="fas fa-hotel" style={{ color: "#F4A261" }}></i> Cargo Hab.
      </button>
      <button
        onClick={() => onSelectMethod("Mixto")}
        className="py-2 rounded-md bg-button-primary text-white shadow-md border border-gray-300 hover:bg-myFriend-900 flex items-center gap-2 px-6"
      >
        Mixto
      </button>
    </div>
  );
};

export default PaymentMethodButtons;
