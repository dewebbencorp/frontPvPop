import React, { useState, useEffect } from "react";
import ModalHeader from "./Modal/ModalHeader";
import PaymentMethodButtons from "./Modal/PaymentMethodButtons";
import PaymentMethodFields from "./Modal/PaymentMethodFields";
import ConfirmAuthModal from "../../../common/components/ConfirmAuthModal";
import { IPaymentMethod } from "../../../common/interfaces/IPaymentMethod";

interface ModalPagoProps {
  isOpen: boolean;
  onClose: () => void;
  method: IPaymentMethod;
  onPay: (method: IPaymentMethod) => void; // Esta función se ejecuta al confirmar la venta
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
  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [mxnAmount, setMxnAmount] = useState<number>(0);
  const [usdAmount, setUsdAmount] = useState<number>(0);
  const [cardAmount, setCardAmount] = useState<number>(0);
  const [roomAmount, setRoomAmount] = useState<number>(0);
  const [change, setChange] = useState<number>(0);
  const [totalUsd, setTotalUsd] = useState<number>(0);

  const usdExchangeRate = 20;

  useEffect(() => {
    if (isOpen) {
      setSelectedMethod(null);
      setMxnAmount(0);
      setUsdAmount(0);
      setCardAmount(0);
      setRoomAmount(0);
    }
  }, [isOpen]);

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

  // Mostrar el modal de confirmación de autorización cuando se da clic en pagar
  const handlePayClick = () => {
    setShowConfirmationModal(true);
  };

  // Función para confirmar la venta
  const handleConfirmVenta = (username: string, password: string) => {
    setShowConfirmationModal(false);
    onPay(method);  // Realizar la venta tras la confirmación
    onClose();  // Cerrar el modal de pago
  };

  return (
    <>
      <div
        className={`fixed inset-0 z-50 bg-gray-800 bg-opacity-50 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div className="relative mx-auto my-16 bg-white rounded-lg shadow-lg max-w-lg p-6">
          <ModalHeader title="Elegir Método de Pago" onClose={onClose} />
          <hr className="my-4 border-t border-gray-300" />

          {!selectedMethod && (
            <PaymentMethodButtons
              selectedMethod={selectedMethod}
              onSelectMethod={setSelectedMethod}
            />
          )}

          {selectedMethod && (
            <PaymentMethodFields
              selectedMethod={selectedMethod}
              mxnAmount={mxnAmount}
              usdAmount={usdAmount}
              cardAmount={cardAmount}
              roomAmount={roomAmount}
              change={change}
              totalUsd={totalUsd}
              handleAmountChange={handleAmountChange}
              method={method}
              updateMethod={updateMethod}
            />
          )}

          <div className="flex justify-end space-x-4 mt-6">
            {selectedMethod ? (
              <>
                <button
                  onClick={handlePayClick}
                  className="px-4 py-2 bg-[#1C878F] text-white rounded-md shadow-md hover:bg-teal-600"
                >
                  PAGAR
                </button>
                <button
                  onClick={() => setSelectedMethod(null)}
                  className="px-4 py-2 bg-red-500 hover:bg-red-600 rounded-md text-white"
                >
                  CANCELAR
                </button>
              </>
            ) : (
              <button
                onClick={onClose}
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              >
                CERRAR
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Modal de confirmación de autorización */}
      <ConfirmAuthModal
        isOpen={showConfirmationModal}
        onClose={() => setShowConfirmationModal(false)}
        onConfirm={handleConfirmVenta}
        actionDescription="la venta"
      />
    </>
  );
};

export default ModalPago;
