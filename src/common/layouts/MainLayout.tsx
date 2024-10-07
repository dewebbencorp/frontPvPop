import React from 'react';
import Header from './Header'; 
import Footer from './Footer'; 
import { IonPage, IonContent } from '@ionic/react';
interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <IonPage style={{ backgroundColor: '#F0F8FF' }}>
        
      <Header />

      <IonContent>
        {children}
      </IonContent>

      <Footer />
    </IonPage>
  );
};

export default MainLayout;