import React from 'react';
import { IonFooter } from '@ionic/react';
import Navbar from '../components/Navbar';

const Footer: React.FC = () => {
  return (
    <>
      <IonFooter className="h-10 -z-10">
        <Navbar/>
      </IonFooter>
    </>
  );
};

export default Footer;
