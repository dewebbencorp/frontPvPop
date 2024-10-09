import { IonContent, IonPage,} from "@ionic/react";
import ModuleCard from "../../common/components/ModuleCard";
import Header from "../../common/layouts/Header";
import IModuleCard from "../../common/interfaces/IModuleCard";
import React from "react";
import '../../theme/Global.css'

const cardData: IModuleCard[] = [
  {
    title: "Devoluciones",
    subtitle: "Módulo de devoluciónes de productos",
    description: "Devolución de productos por medio de ticket y consulta de NC",
    path: "/returns",
  },
  {
    title: "Devoluciones 2",
    subtitle: "aaaaaaaaaaaa",
    description: "alkjsdlkajdksljaskldjaskld",
    path: "/returns2",
  },
  {
    title: "Retiros",
    subtitle: "Módulo de retiro de efectivo y doctos",
    description:
      "El módulo que se encarga de permitir la extracción de efectivo o doctos, generando un folio",
    path: "/returns",
  },
  {
    title: "Auditoria",
    subtitle: "Módulo para la realización de cortes, y la impresión final",
    description:
      "Carga de denominación nacional, generación del corte e impresión del ticket final",
    path: "/audit",
  },
  {
    title: "Punto de venta",
    subtitle: "...",
    description: "...",
    path: "/salespoint"
  }
];

const Home: React.FC = () => {
  return (
    <IonPage style={{ backgroundColor: '#F0F8FF !important' }}>
      <Header />
      <IonContent fullscreen style={{ backgroundColor: '#F0F8FF' }}>
        <div className="card-container">
          {cardData.map((card, index) => (
            <ModuleCard
              key={index}
              title={card.title}
              subtitle={card.subtitle}
              description={card.description}
              path={card.path}
            />
          ))}
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
