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
import { useAuth } from "../../../common/hooks/AuthContext"; 

const SalesPoint: React.FC = () => {
  const { changeTitle } = useNavigationData();
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { toastMessage, showToast, hideToast } = useToast();
  const { user } = useAuth(); 
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

  useEffect(() => {
    changeTitle("Ventas");

    const token = localStorage.getItem("token");
    setIsLoggedIn(!!token);

    const updatedTotal = articulos.reduce((acc, item) => acc + item.total, 0);
    setTotal(updatedTotal);
    setPaymentMethod((prev) => ({ ...prev, total: updatedTotal }));
  }, [articulos, changeTitle]);

  const handleLoginSuccess = () => {
    const username = localStorage.getItem("username") || "Usuario";
    setIsLoggedIn(true);
    showToast("success", `Bienvenido ${username}`);
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
            handleAgregarArticulo={() => {}}
          />
          <ProductTable
            articulos={articulos}
            handleCantidadChange={() => {}}
            handleEliminarArticulo={() => {}}
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
          onPay={() => {}}
          updateMethod={() => {}}
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
