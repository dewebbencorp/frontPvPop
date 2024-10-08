import React, { useState, useEffect, Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';

import Home from './modules/home/Home';
import Returns from './modules/returns/views/Returns';
import Returns2 from './modules/returns/views/Returns2';
import Audit from './modules/audit/views/Audit';
import Ticket from './common/hooks/Ticket';
import PuntoVenta from './modules/salesPoint/views/PuntoVenta';

import '@ionic/react/css/core.css';
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';
import '@ionic/react/css/palettes/dark.system.css';

import './theme/variables.css';
import './theme/App.css';
import LoadingSpinner from './common/components/LoadingSpinner';

setupIonicReact();

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Muestra el loading por 3 segundos
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000); // Cambia el tiempo según lo necesites

    return () => clearTimeout(timer); // Limpia el timer al desmontar
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <IonApp>
      <IonReactRouter>
        <IonRouterOutlet>
          <Suspense fallback={<LoadingSpinner />}>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route exact path="/returns">
              <Returns />
            </Route>
            <Route exact path="/returns2">
              <Returns2 />
            </Route>
            <Route exact path="/salespoint">
              <PuntoVenta />
            </Route>
            <Switch>
              <Route path="/audit" component={Audit} />
              <Route path="/ticket/:remision" component={Ticket} />
            </Switch>
          </Suspense>
        </IonRouterOutlet>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
