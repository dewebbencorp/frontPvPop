import { Redirect, Route, Switch } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import React, { Suspense } from 'react';

const Home = React.lazy(() => import('./modules/home/Home'));
const Returns = React.lazy(() => import('./modules/returns/views/Returns'));
const Returns2 = React.lazy(() => import('./modules/returns/views/Returns2'));
const Audit = React.lazy(() => import('../src/modules/audit/views/Audit.js'));
const Ticket = React.lazy(() => import('./common/hooks/Ticket.js'));
const PuntoVenta = React.lazy(() => import('./modules/salesPoint/views/PuntoVenta'))
// Ionic styles
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

// App and custom theme
import './theme/variables.css';
import './theme/App.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Suspense fallback={<div>Loading...</div>}>
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

export default App;
