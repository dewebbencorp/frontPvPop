import { IonIcon } from "@ionic/react";
import React, { useEffect, useRef } from "react";
import { close } from "ionicons/icons";

interface ProductTableProps {
  articulos: Array<{
    articulo: string;
    cantidad: number;
    precio: number;
    descuento: number;
    total: number;
  }>;
  handleCantidadChange: (index: number, nuevaCantidad: number) => void;
  handleEliminarArticulo: (index: number) => void;
  isLoading?: boolean;
}

const ProductTable: React.FC<ProductTableProps> = ({
  articulos,
  handleCantidadChange,
  handleEliminarArticulo,
  isLoading, // Recibe la nueva propiedad
}) => {
  const lastItemRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (lastItemRef.current) {
      lastItemRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
      lastItemRef.current.focus();
    }
  }, [articulos]);

  return (
    <div className="shadow-md border border-gray-200 rounded-lg bg-white">
      <div className="bg-myFriend-700 text-white py-2 px-4 rounded-t-lg font-semibold text-center sticky top-0 z-10">
        <div className="grid grid-cols-12">
          <div className="col-span-4">ARTÍCULO</div>
          <div className="col-span-1 text-center">CANT</div>
          <div className="col-span-2 text-center">PRECIO</div>
          <div className="col-span-2 text-center">% DESC</div>
          <div className="col-span-2 text-center">TOTAL</div>
          <div className="col-span-1"></div>
        </div>
      </div>

      <div className={`${articulos.length > 5 ? "overflow-y-auto max-h-72" : ""}`}>
        {isLoading ? (
          <div className="p-4 text-center text-gray-500">Cargando...</div>
        ) : articulos.length === 0 ? (
          <div className="p-4 text-center text-gray-500">Sin artículos</div>
        ) : (
          articulos.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-200 p-3 grid grid-cols-12 items-center"
              ref={index === articulos.length - 1 ? lastItemRef : null}
            >
              <div className="col-span-4 text-gray-700 text-[10pt]">
                {item.articulo}
              </div>
              <div className="col-span-1 text-right">
                <input
                  type="number"
                  value={item.cantidad}
                  onChange={(e) =>
                    handleCantidadChange(index, parseInt(e.target.value, 10))
                  }
                  className="text-center border border-gray-300 rounded-md p-1 w-full shadow-sm focus:ring-2 focus:ring-teal-500 transition"
                />
              </div>
              <div className="col-span-2 text-center text-gray-700 text-[11pt]">
                {item.precio.toFixed(2)}
              </div>
              <div className="col-span-2 text-center text-gray-700 text-[11pt]">
                {item.descuento}%
              </div>
              <div className="col-span-2 text-center text-gray-700 text-[11pt]">
                {item.total.toFixed(2)}
              </div>
              <div className="col-span-1 text-center">
                <button
                  onClick={() => handleEliminarArticulo(index)}
                  className="bg-red-500 hover:bg-red-600 rounded-md text-white  px-2 transition text-[14pt]"
                >
                  <IonIcon aria-hidden="true" icon={close} slot="start" className="h-7 items-center flex w-7"></IonIcon>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ProductTable;
