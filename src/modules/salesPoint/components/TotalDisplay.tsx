import React from "react";

interface TotalDisplayProps {
  total: number;
  setPaymentMethod: (method: any) => void;
  setShowModalPago: (value: boolean) => void;
}

const TotalDisplay: React.FC<TotalDisplayProps> = ({
  total,
  setPaymentMethod,
  setShowModalPago,
}) => {
  return (
    <div className="col-span-4 flex flex-col items-center justify-start">
      <img
        src="https://www.coca-cola.com/content/dam/onexp/co/es/brands/coca-cola/coca-cola-original/ccso_600ml_750x750.png"
        alt="Producto"
        className="w-4/5 h-64 object-contain rounded-md shadow-md"
      />

      <div className="flex justify-between items-center w-full mt-4 text-2xl text-gray-800 text-[18pt]">
        <span className="text-2xl text-gray-800 text-[14pt]">TOTAL:</span>
        <span className="text-2xl text-gray-800 font-semibold text-[18pt]">
          ${total.toFixed(2)}
        </span>
      </div>

      <button
        className="w-full mt-4 bg-teal-500 hover:bg-teal-600 text-white py-2 rounded-md shadow-md transition"
        onClick={() => {
          setPaymentMethod((prev: any) => ({
            ...prev,
            total: total,
          }));
          setShowModalPago(true);
        }}
      >
        PAGAR
      </button>
    </div>
  );
};

export default TotalDisplay;
