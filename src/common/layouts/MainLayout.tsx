import React from 'react';
import Header from './Header'; 
import Footer from './Footer'; 
import INavbarModule from '../interfaces/INavbarModule';
import { IonPage, IonContent } from '@ionic/react';
import '../../theme/Global.css'
interface MainLayoutProps {
  children: React.ReactNode;
  navbarModules: INavbarModule[];
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, navbarModules }) => {
  return (
    <IonPage style={{ backgroundColor: '#F0F8FF' }}>
        
      <Header />

      <IonContent>
        {children}
      </IonContent>

      <Footer navbarModules={navbarModules} />
    </IonPage>
  );
};

export default MainLayout;