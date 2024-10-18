// src/modules/salesPoint/views/SalesPoint.tsx
import React, { useEffect, useState } from "react";
import useNavigationData from "../../../common/hooks/useNavigationData";
import ModalPago from "../components/ModalPayment";
import { IPaymentMethod } from "../../../common/interfaces/IPaymentMethod";
import MainLayout from "../../../common/layouts/MainLayout";
import ProductForm from "../components/ProductForm";
import ProductTable from "../components/ProductTable";
import TotalDisplay from "../components/TotalDisplay";
import Toast from "../../../common/components/Toast";
import useToast from "../../../common/hooks/useToast";
import { useAuth } from "../../../common/hooks/AuthContext";
import { buscarArticulo, agregarVenta } from "../../../services/salesService"; // Importar el servicio

const SalesPoint: React.FC = () => {
  const { changeTitle } = useNavigationData();
  const { toastMessage, showToast, hideToast } = useToast();
  const { user, isAuthenticated, loading } = useAuth();

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
  ]);

  const [total, setTotal] = useState(0);
  const [showModalPago, setShowModalPago] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<IPaymentMethod>({
    total: 0,
    currency: "MXN",
    amount: 0,
  });

  const handleAgregarArticulo = () => {
    buscarArticulo(clave)
      .then((articulo) => {
        if (!articulo) {
          console.error("Artículo no encontrado");
          return;
        }

        const descripcionArticulo = articulo.Cat_Articulo?.Desc_Art || "Descripción no disponible";
        const totalArticulo = (articulo.Precio1 - (articulo.Precio1 * descuento) / 100) * cantidad;

        const nuevoArticulo = {
          articulo: descripcionArticulo,
          cantidad,
          precio: articulo.Precio1,
          descuento,
          total: totalArticulo,
        };

        setArticulos([...articulos, nuevoArticulo]);
        setClave("");
        setCantidad(1);
        setDescuento(0);
      })
      .catch((error) => {
        console.error("Error buscando el artículo:", error);
      });
  };

  // Función para eliminar un artículo
  const handleEliminarArticulo = (index: number) => {
    const nuevosArticulos = articulos.filter((_, i) => i !== index);
    setArticulos(nuevosArticulos);
  };

  useEffect(() => {
    changeTitle("Ventas");
    const updatedTotal = articulos.reduce((acc, item) => acc + item.total, 0);
    setTotal(updatedTotal);
    setPaymentMethod((prev) => ({ ...prev, total: updatedTotal }));
  }, [articulos, changeTitle]);

  const handlePay = () => {
    setShowModalPago(false);
    setArticulos([]);
    showToast("success", "Venta realizada correctamente");
  };

  const handleLoginSuccess = () => {
    const username = localStorage.getItem("username") || user || "Usuario";
    showToast("success", `Bienvenido ${username}`);
  };

  return (
    <MainLayout>
      <div className="grid grid-cols-12 gap-6 p-4">
        <div className="col-span-8">
          <ProductForm
            clave={clave}
            cantidad={cantidad}
            descuento={descuento}
            setClave={setClave}
            setCantidad={setCantidad}
            setDescuento={setDescuento}
            handleAgregarArticulo={handleAgregarArticulo}
          />
          <ProductTable
            articulos={articulos}
            handleCantidadChange={() => {}}
            handleEliminarArticulo={handleEliminarArticulo}
          />
        </div>
        <TotalDisplay
          total={total}
          setPaymentMethod={setPaymentMethod}
          setShowModalPago={setShowModalPago}
        />
      </div>

      {showModalPago && (
        <ModalPago
          isOpen={showModalPago}
          onClose={() => setShowModalPago(false)}
          method={paymentMethod}
          onPay={handlePay}
          updateMethod={() => {}}
        />
      )}

      {toastMessage && (
        <Toast
          type={toastMessage.type}
          message={toastMessage.message}
          onClose={hideToast}
        />
      )}
    </MainLayout>
  );
};

export default SalesPoint;
