import React from 'react';
import { IonHeader, IonToolbar, IonTitle, IonContent, IonFooter, IonButtons, IonButton } from '@ionic/react';
import Navbar from '../components/Navbar';
import INavbarModule from '../interfaces/INavbarModule';

interface MainLayoutProps {
  children: React.ReactNode;
  navbarModules: INavbarModule[];
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, navbarModules }) => {
  return (
    <>
      {/* Cabecera */}
      <IonHeader>
        <IonToolbar>
          <IonTitle>General Header</IonTitle>
        </IonToolbar>
      </IonHeader>

      {/* Contenido dinámico */}
      <IonContent>
        {children}
      </IonContent>

      {/* Footer con la barra de navegación */}
      <IonFooter>
        <IonButtons slot="start">
          <IonButton fill="solid"> Example </IonButton>
        </IonButtons>
        <Navbar modules={navbarModules} />
      </IonFooter>
    </>
  );
};

export default MainLayout;
