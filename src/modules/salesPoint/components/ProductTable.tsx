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
  isLoading,
}) => {
  const lastItemRef = useRef<HTMLTableRowElement | null>(null);

  useEffect(() => {
    if (lastItemRef.current) {
      lastItemRef.current.scrollIntoView({ behavior: "smooth", block: "end" });
      lastItemRef.current.focus();
    }
  }, [articulos]);

  return (
    <div className="overflow-x-auto rounded-lg shadow-general">
      <div className="max-h-96 overflow-y-auto">
        <table className="min-w-full bg-white rounded-lg shadow-lg border-collapse">
          <thead className="sticky top-0 bg-myFriend-600 text-white z-10">
            <tr>
              <th className="font-semibold text-sm text-white p-3 first:rounded-tl-lg last:rounded-tr-lg whitespace-nowrap">
                ARTÍCULO
              </th>
              <th className="font-semibold text-sm text-white p-3 text-center whitespace-nowrap">
                CANTIDAD
              </th>
              <th className="font-semibold text-sm text-white p-3 text-center whitespace-nowrap">
                PRECIO
              </th>
              <th className="font-semibold text-sm text-white p-3 text-center whitespace-nowrap">
                % DESC
              </th>
              <th className="font-semibold text-sm text-white p-3 text-center whitespace-nowrap">
                TOTAL
              </th>
              <th className="font-semibold text-sm text-white p-3 text-center whitespace-nowrap"></th>
            </tr>
          </thead>
          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan={6} className="text-center p-4 text-gray-500">
                  Cargando...
                </td>
              </tr>
            ) : articulos.length === 0 ? (
              <tr>
                <td colSpan={6} className="text-center p-4 text-gray-500">
                  Sin artículos
                </td>
              </tr>
            ) : (
              articulos.map((item, index) => (
                <tr
                  key={index}
                  className={`text-center ${
                    index % 2 === 0 ? "bg-gray-100" : "bg-white"
                  } ${item.cantidad === 0 ? "bg-red-100" : ""}`}
                  ref={index === articulos.length - 1 ? lastItemRef : null}
                >
                  <td className="text-gray-700 text-[14px] px-3 h-10 w-1/2 text-start">
                    {item.articulo}
                  </td>
                  <td className="px-3 h-10">
                    <input
                      type="number"
                      value={item.cantidad}
                      onChange={(e) =>
                        handleCantidadChange(index, parseInt(e.target.value, 10))
                      }
                      className="text-center border rounded-md p-1 w-16 shadow-sm focus:ring-2 focus:ring-teal-500 transition"
                    />
                  </td>
                  <td className="text-gray-700 text-[14px] px-3 h-10 text-center">
  {item.precio !== undefined ? item.precio.toFixed(2) : "N/A"}
</td>
                  <td className="text-gray-700 text-[14px] px-3 h-10 w-32 text-center">
                    {item.descuento}%
                  </td>
                  <td className="text-gray-700 text-[14px] px-3 h-10 text-center">
  {item.total !== undefined ? item.total.toFixed(2) : "N/A"}
</td>
                  <td className="px-3 h-10 text-center">
                    <div className="flex justify-center items-center h-full">
                      <button
                        onClick={() => handleEliminarArticulo(index)}
                        className="bg-red-500 hover:bg-red-600 rounded-md text-white px-2 transition"
                      >
                        <IonIcon
                          aria-hidden="true"
                          icon={close}
                          className="h-6 items-center flex w-4"
                        />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProductTable;
