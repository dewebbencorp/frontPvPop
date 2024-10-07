import React from 'react';
import { IonSegment, IonSegmentButton, IonLabel } from '@ionic/react';
import INavbarModule from '../interfaces/INavbarModule';

interface NavbarProps {
  modules: INavbarModule[];
}

const Navbar: React.FC<NavbarProps> = ({ modules }) => {
  return (
    <IonSegment value="default">
      {modules.map((module, index) => (
        <IonSegmentButton key={index} value={module.title}>
          <IonLabel>{module.title}</IonLabel>
        </IonSegmentButton>
      ))}
    </IonSegment>
  );
};

export default Navbar;
