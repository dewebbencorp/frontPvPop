import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import { IonApp, IonRouterOutlet, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import PrivateRoute from './common/hooks/PrivateRoute';
import LoadingSpinner from './common/components/LoadingSpinner';

// Lazy-loaded modules
const Login = React.lazy(() => import('./modules/login/views/Login'));
const Home = React.lazy(() => import('./modules/home/Home'));
const Returns = React.lazy(() => import('./modules/returns/views/Returns'));
const Returns2 = React.lazy(() => import('./modules/returns/views/Returns2'));
const Audit = React.lazy(() => import('./modules/audit/views/Audit'));
const Ticket = React.lazy(() => import('./modules/audit/components/Ticket'));  // Cambia aquí
const SalesPoint = React.lazy(() => import('./modules/salesPoint/views/SalesPoint'));
// const Reconciliation = React.lazy(() => import('./modules/reconciliation/views/Reconciliation'));
// const Reconciliation2 = React.lazy(() => import('./modules/reconciliation/views/Reconciliation2'));
// const Withdrawals = React.lazy(() => import('./modules/withdrawals/views/Withdrawals'));

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

// Ionic styles
import '@ionic/react/css/core.css';
import './theme/variables.css';
import './theme/App.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Suspense fallback={<LoadingSpinner />}>
          <Switch>
            {/* Ruta pública para Login */}
            <Route exact path="/login" component={Login} />

            {/* Rutas protegidas */}
            <PrivateRoute exact path="/home" component={Home} />
            <PrivateRoute exact path="/salespoint" component={SalesPoint} />
            <PrivateRoute exact path="/returns" component={Returns} />
            <PrivateRoute exact path="/returns2" component={Returns2} />
            <PrivateRoute exact path="/audit" component={Audit} />
            <PrivateRoute path="/ticket/:remision" component={Ticket} />

            {/* Ruta de redirección predeterminada */}
            <Route exact path="/">
              <Redirect to="/login" />
            </Route>
          </Switch>
        </Suspense>
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
