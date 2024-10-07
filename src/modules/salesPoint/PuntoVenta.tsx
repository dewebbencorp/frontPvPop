import React, { useEffect, useState } from "react";
import useNavigationData from "../../common/hooks/useNavigationData";
import Header from "../../common/layouts/Header";
import ModalPago from "./components/ModalPayment";
import { PaymentMethod } from "../../common/interfaces/IPaymentMethod";

const PuntoVenta: React.FC = () => {
  const { changeTitle } = useNavigationData();

  useEffect(() => {
    changeTitle("Ventas");
  }, []);

  const [clave, setClave] = useState<string>("");
  const [cantidad, setCantidad] = useState<number>(1);
  const [descuento, setDescuento] = useState<number>(0);
  const [articulos, setArticulos] = useState([
    {
      articulo: "SOL CERVEZA ENVASE 12/4",
      cantidad: 1,
      precio: 16.5,
      descuento: 0,
      total: 16.5,
    },
    {
      articulo: "OCEAN POTION EXTREME COCONUT OIL SPF 4 255ML",
      cantidad: 1,
      precio: 140,
      descuento: 5,
      total: 133,
    },
    {
      articulo: "KISSES CON ALMENDRA",
      cantidad: 2,
      precio: 18,
      descuento: 0,
      total: 36,
    },
    {
      articulo: "SOL CERVEZA ENVASE 12/4",
      cantidad: 1,
      precio: 16.5,
      descuento: 0,
      total: 16.5,
    },
    {
      articulo: "OCEAN POTION EXTREME COCONUT OIL SPF 4 255ML",
      cantidad: 1,
      precio: 140,
      descuento: 5,
      total: 133,
    },
    {
      articulo: "KISSES CON ALMENDRA",
      cantidad: 2,
      precio: 18,
      descuento: 0,
      total: 36,
    },
  ]);

  const [total, setTotal] = useState<number>(0);
  const [showModalPago, setShowModalPago] = useState(false);

  const [paymentMethod, setPaymentMethod] = useState<PaymentMethod>({
    total: 0,
    currency: "MXN",
    amount: 0,
  });

  useEffect(() => {
    const updatedTotal = articulos.reduce((acc, item) => acc + item.total, 0);
    setTotal(updatedTotal);

    setPaymentMethod((prev) => ({
      ...prev,
      total: updatedTotal,
    }));
  }, [articulos]);

  const handleAgregarArticulo = () => {
    const nuevoArticulo = {
      articulo: "COCA COLA 600ML",
      cantidad: cantidad,
      precio: 20,
      descuento: descuento,
      total: cantidad * 20 - (cantidad * 20 * descuento) / 100,
    };

    const articuloExistente = articulos.find(
      (item) => item.articulo === nuevoArticulo.articulo
    );

    if (articuloExistente) {
      const articulosActualizados = articulos.map((item) =>
        item.articulo === nuevoArticulo.articulo
          ? {
              ...item,
              cantidad: item.cantidad + nuevoArticulo.cantidad,
              total:
                (item.cantidad + nuevoArticulo.cantidad) *
                  nuevoArticulo.precio -
                ((item.cantidad + nuevoArticulo.cantidad) *
                  nuevoArticulo.precio *
                  nuevoArticulo.descuento) /
                  100,
            }
          : item
      );
      setArticulos(articulosActualizados);
    } else {
      setArticulos([...articulos, nuevoArticulo]);
    }
  };

  const handleEliminarArticulo = (index: number) => {
    const updatedArticulos = articulos.filter((_, i) => i !== index);
    setArticulos(updatedArticulos);
  };

  const handleCantidadChange = (index: number, nuevaCantidad: number) => {
    const updatedArticulos = articulos.map((item, i) =>
      i === index
        ? {
            ...item,
            cantidad: nuevaCantidad,
            total:
              nuevaCantidad * item.precio -
              (nuevaCantidad * item.precio * item.descuento) / 100,
          }
        : item
    );
    setArticulos(updatedArticulos);
  };

  const handlePay = (method: PaymentMethod) => {
    console.log("Pago realizado con el método:", method);
    setShowModalPago(false);
  };

  const updateMethod = (field: string, value: string | number) => {
    setPaymentMethod((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  return (
    <div className="bg-gray-50 min-h-screen font-segoe">
      <Header />
      <div className="p-6">
        <div className="grid grid-cols-12 gap-6">
          <div className="col-span-8">
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

            {/* Tabla de artículos */}
            <div className="shadow-md border border-gray-200 rounded-lg bg-white">
              <div className="bg-teal-500 text-white py-2 px-4 rounded-t-lg font-semibold text-center">
                <div className="grid grid-cols-12">
                  <div className="col-span-4">ARTÍCULO</div>
                  <div className="col-span-1 text-center">CANT</div>
                  <div className="col-span-2 text-center">PRECIO</div>
                  <div className="col-span-2 text-center">% DESC</div>
                  <div className="col-span-2 text-center">TOTAL</div>
                  <div className="col-span-1"></div>
                </div>
              </div>

              {articulos.map((item, index) => (
                <div
                  key={index}
                  className="border-b border-gray-200 p-3 grid grid-cols-12 items-center"
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
                      className="text-right border border-gray-300 rounded-md p-1 w-full shadow-sm focus:ring-2 focus:ring-teal-500 transition"
                    />
                  </div>
                  <div className="col-span-2 text-center text-gray-700 text-[12pt]">
                    {item.precio.toFixed(2)}
                  </div>
                  <div className="col-span-2 text-center text-gray-700 text-[12pt]">
                    {item.descuento}%
                  </div>
                  <div className="col-span-2 text-center text-gray-700 text-[12pt]">
                    {item.total.toFixed(2)}
                  </div>
                  <div className="col-span-1 text-center">
                    <button
                      onClick={() => handleEliminarArticulo(index)}
                      className="bg-red-500 hover:bg-red-600 text-white py-1 px-2 rounded-md transition"
                    >
                      ×
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Columna de imagen y total */}
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
                setPaymentMethod((prev) => ({
                  ...prev,
                  total: total,
                }));
                setShowModalPago(true); 
              }}
            >
              PAGAR
            </button>
          </div>
        </div>

        <ModalPago
          isOpen={showModalPago}
          onClose={() => setShowModalPago(false)}
          method={paymentMethod}
          onPay={handlePay}
          updateMethod={updateMethod}
        />
      </div>
    </div>
  );
};

export default PuntoVenta;
