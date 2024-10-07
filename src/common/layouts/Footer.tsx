import React from 'react';
import { IonFooter } from '@ionic/react';
import Navbar from '../components/Navbar';

const Footer: React.FC = () => {
  return (
    <>
      <IonFooter>
        <Navbar/>
      </IonFooter>
    </>
  );
};

export default Footer;
