import React, { useEffect, useState } from "react";
import useNavigationData from "../../../common/hooks/useNavigationData";
import ModalPago from "../components/ModalPayment";
import { IPaymentMethod } from "../../../common/interfaces/IPaymentMethod";
import MainLayout from "../../../common/layouts/MainLayout";
import ProductForm from "../components/ProductForm";
import ProductTable from "../components/ProductTable";
import TotalDisplay from "../components/TotalDisplay";
import Login from "../../login/views/Login";
import Toast from "../../../common/components/Toast";
import useToast from "../../../common/hooks/useToast";

const SalesPoint: React.FC = () => {
  const { changeTitle } = useNavigationData();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { toastMessage, showToast, hideToast } = useToast();
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

  const [total, setTotal] = useState<number>(0);
  const [showModalPago, setShowModalPago] = useState(false);
  const [paymentMethod, setPaymentMethod] = useState<IPaymentMethod>({
    total: 0,
    currency: "MXN",
    amount: 0,
  });

  useEffect(() => {
    changeTitle("Ventas");
    const updatedTotal = articulos.reduce((acc, item) => acc + item.total, 0);
    setTotal(updatedTotal);
    setPaymentMethod((prev) => ({ ...prev, total: updatedTotal }));
  }, [articulos]);

  const handleAgregarArticulo = () => {
    const nuevoArticulo = {
      articulo: "COCA COLA 600ML",
      cantidad,
      precio: 20,
      descuento: 0,
      total: 20,
    };

    const articuloExistente = articulos.find(
      (item) => item.articulo === nuevoArticulo.articulo
    );

    if (articuloExistente) {
      setArticulos((prev) =>
        prev.map((item) =>
          item.articulo === nuevoArticulo.articulo
            ? {
                ...item,
                cantidad: item.cantidad + nuevoArticulo.cantidad,
                total:
                  (item.cantidad + nuevoArticulo.cantidad) * nuevoArticulo.precio,
              }
            : item
        )
      );
    } else {
      setArticulos([...articulos, nuevoArticulo]);
    }
  };

  const handleEliminarArticulo = (index: number) => {
    setArticulos((prev) => prev.filter((_, i) => i !== index));
  };

  const handleCantidadChange = (index: number, nuevaCantidad: number) => {
    setArticulos((prev) =>
      prev.map((item, i) =>
        i === index
          ? {
              ...item,
              cantidad: nuevaCantidad,
              total:
                nuevaCantidad * item.precio -
                (nuevaCantidad * item.precio * item.descuento) / 100,
            }
          : item
      )
    );
  };

  const handlePay = (method: IPaymentMethod) => {
    setShowModalPago(false);
  };

  const updateMethod = (field: string, value: string | number) => {
    setPaymentMethod((prevState) => ({
      ...prevState,
      [field]: value,
    }));
  };

  const handleLoginSuccess = () => {
    setIsLoggedIn(true);
    showToast("success", "Inicio de sesión exitoso");
  };

  return (
    <MainLayout>
      <div className="grid grid-cols-12 gap-6 p-4">
        <div className="col-span-8">
          <ProductForm
            clave=""
            cantidad={1}
            descuento={0}
            setClave={() => {}}
            setCantidad={() => {}}
            setDescuento={() => {}}
            handleAgregarArticulo={handleAgregarArticulo}
          />
          <ProductTable
            articulos={articulos}
            handleCantidadChange={handleCantidadChange}
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
          updateMethod={updateMethod}
        />
      )}

      {!isLoggedIn && <Login onLoginSuccess={handleLoginSuccess} />}

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
