import React from 'react';
import { IonFooter } from '@ionic/react';
import Navbar from '../components/Navbar';

const Footer: React.FC = () => {
  return (
    <>
      <IonFooter className="min-h-10 h-14 -z-10 flex items-end">
        <Navbar/>
      </IonFooter>
    </>
  );
};

export default Footer;
