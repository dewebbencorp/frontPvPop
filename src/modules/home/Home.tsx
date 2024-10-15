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
    title: "Cortes / Denominaciones",
    subtitle: "Cortes de caja y efectivo con deniminacion méxicana",
    description: "Permite realizar los cortes de caja, revisar los realizados anteriormente y editar los existentes.",
    path: "/reconciliations"
  },
  {
    title: "Cortes / Denominaciones 2",
    subtitle: "Nuevo corte de caja",
    description: "Permite realizar un nuevo corte de caja.",
    path: "/reconciliations2"
  },
  {
    title: "Auditoria",
    subtitle: "Módulo para la realización de cortes, y la impresión final",
    description:
      "Carga de denominación nacional, generación del corte e impresión del ticket final",
    path: "/audit",
  },
  {
    title: "Retiros",
    subtitle: "Retiros por efectivo o doctos",
    description: "Retiros por efectivo o doctos",
    path: "/withdrawals",
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
