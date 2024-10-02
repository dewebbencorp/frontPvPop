import React from 'react';
import Header from './Header'; 
import Footer from './Footer'; 
import INavbarModule from '../interfaces/INavbarModule';
import { IonPage, IonContent } from '@ionic/react';

interface MainLayoutProps {
  children: React.ReactNode;
  navbarModules: INavbarModule[];
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, navbarModules }) => {
  return (
    <IonPage>
        
      <Header />

      <IonContent>
        {children}
      </IonContent>

      <Footer navbarModules={navbarModules} />
    </IonPage>
  );
};

export default MainLayout;