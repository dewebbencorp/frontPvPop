import React, { useState } from "react";
import {
  IonPage,
  IonContent,
  IonButton,
  IonIcon,
  IonItem,
  IonLabel,
  IonInput,
  IonRow,
  IonCol,
  IonGrid,
  IonList,
  IonItemSliding,
  IonItemOptions,
  IonItemOption,
} from "@ionic/react";
import { searchOutline, addCircleOutline, trashOutline } from "ionicons/icons";
import Navbar from '../components/Navbar';

const PuntoVenta: React.FC = () => {
  const [clave, setClave] = useState<string>("");
  const [cantidad, setCantidad] = useState<number>(1);
  const [descuento, setDescuento] = useState<number>(0);
  const [articulos, setArticulos] = useState([
    { articulo: "SOL CERVEZA ENVASE 12/4", cantidad: 1, precio: 16.5, descuento: 0, total: 16.5 },
    { articulo: "OCEAN POTION EXTREME COCONUT OIL SPF 4 255ML", cantidad: 1, precio: 140, descuento: 5, total: 133 },
    { articulo: "KISSES CON ALMENDRA", cantidad: 2, precio: 18, descuento: 0, total: 36 },
  ]);
  const [total, setTotal] = useState<number>(185.5);

  const handleAgregarArticulo = () => {
    const nuevoArticulo = {
      articulo: "COCA COLA 600ML",
      cantidad: cantidad,
      precio: 20,
      descuento: descuento,
      total: cantidad * 20 - (cantidad * 20 * descuento) / 100,
    };
    setArticulos([...articulos, nuevoArticulo]);
    setTotal(total + nuevoArticulo.total);
  };

  const handleEliminarArticulo = (index: number) => {
    const updatedArticulos = articulos.filter((_, i) => i !== index);
    const updatedTotal = updatedArticulos.reduce((acc, item) => acc + item.total, 0);
    setArticulos(updatedArticulos);
    setTotal(updatedTotal);
  };

  return (
    <IonPage>
      <Navbar /> {/* Llama al Navbar aquí */}

      <IonContent className="ion-padding">
        <IonGrid>
          <IonRow className="ion-align-items-center">
            <IonCol size="3">
              <IonItem>
                <IonLabel position="stacked">CLAVE:</IonLabel>
                <IonInput value={clave} placeholder="Clave123" onIonChange={(e) => setClave(e.detail.value!)} />
              </IonItem>
            </IonCol>

            <IonCol size="3">
              <IonItem>
                <IonLabel position="stacked">CANTIDAD:</IonLabel>
                <IonInput
                  type="number"
                  value={cantidad}
                  placeholder="1"
                  onIonChange={(e) => setCantidad(parseInt(e.detail.value!, 10))}
                />
              </IonItem>
            </IonCol>

            <IonCol size="3">
              <IonItem>
                <IonLabel position="stacked">DESC (%):</IonLabel>
                <IonInput
                  type="number"
                  value={descuento}
                  placeholder="0"
                  onIonChange={(e) => setDescuento(parseInt(e.detail.value!, 10))}
                />
              </IonItem>
            </IonCol>

            <IonCol size="2">
              <IonButton expand="block" onClick={handleAgregarArticulo}>
                <IonIcon icon={addCircleOutline} />
              </IonButton>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonList>
                <IonItem>
                  <IonLabel>ARTÍCULO</IonLabel>
                  <IonLabel className="ion-text-center">CANT</IonLabel>
                  <IonLabel className="ion-text-center">PRECIO</IonLabel>
                  <IonLabel className="ion-text-center">% DESC</IonLabel>
                  <IonLabel className="ion-text-end">TOTAL</IonLabel>
                </IonItem>
                {articulos.map((item, index) => (
                  <IonItemSliding key={index}>
                    <IonItem>
                      <IonLabel>{item.articulo}</IonLabel>
                      <IonLabel className="ion-text-center">{item.cantidad}</IonLabel>
                      <IonLabel className="ion-text-center">${item.precio}</IonLabel>
                      <IonLabel className="ion-text-center">{item.descuento}</IonLabel>
                      <IonLabel className="ion-text-end">${item.total.toFixed(2)}</IonLabel>
                    </IonItem>

                    <IonItemOptions side="end">
                      <IonItemOption color="danger" onClick={() => handleEliminarArticulo(index)}>
                        <IonIcon icon={trashOutline} />
                      </IonItemOption>
                    </IonItemOptions>
                  </IonItemSliding>
                ))}
              </IonList>
            </IonCol>

            <IonCol size="4">
              {/* Simula la imagen de un producto */}
              <img
                src="https://www.coca-cola.com/content/dam/journey/us/en/private/2017/04/coca-cola-600ml-02.jpg"
                alt="Producto"
                style={{ width: "100%" }}
              />
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol size="8" />
            <IonCol size="4">
              <IonItem lines="none">
                <IonLabel>TOTAL:</IonLabel>
                <IonLabel className="ion-text-end">${total.toFixed(2)}</IonLabel>
              </IonItem>
              <IonButton expand="block" color="success">
                PAGAR
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default PuntoVenta;
