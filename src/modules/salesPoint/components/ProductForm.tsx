import React from "react";

interface ProductFormProps {
  clave: string;
  cantidad: number;
  descuento: number;
  setClave: (value: string) => void;
  setCantidad: (value: number) => void;
  setDescuento: (value: number) => void;
  handleAgregarArticulo: () => void;
}

const ProductForm: React.FC<ProductFormProps> = ({
  clave,
  cantidad,
  descuento,
  setClave,
  setCantidad,
  setDescuento,
  handleAgregarArticulo,
}) => {
  return (
    <div className="grid grid-cols-12 gap-4 mb-6">
      <div className="col-span-4">
        <label className="block text-gray-700 mb-1">Clave</label>
        <input
          type="text"
          value={clave}
          placeholder="Clave"
          onChange={(e) => setClave(e.target.value)}
          className="border border-gray-300 rounded-md p-2 w-full shadow-sm"
        />
      </div>

      <div className="col-span-2">
        <label className="block text-gray-700 mb-1">Cantidad</label>
        <input
          type="number"
          value={cantidad}
          onChange={(e) => setCantidad(parseInt(e.target.value, 10))}
          className="border border-gray-300 rounded-md p-2 w-full shadow-sm"
        />
      </div>

      <div className="col-span-2">
        <label className="block text-gray-700 mb-1">Desc (%)</label>
        <input
          type="number"
          value={descuento}
          onChange={(e) => setDescuento(parseInt(e.target.value, 10))}
          className="border border-gray-300 rounded-md p-2 w-full shadow-sm"
        />
      </div>

      <div className="col-span-2 flex justify-center items-end">
        <button
          onClick={handleAgregarArticulo}
          className="bg-teal-500 hover:bg-teal-600 text-white py-2 px-4 rounded-md shadow-md transition"
        >
          +
        </button>
      </div>
    </div>
  );
};

export default ProductForm;
