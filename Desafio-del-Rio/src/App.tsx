import { IonApp, IonRouterOutlet } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Route, Redirect } from 'react-router-dom';

import Inicio from './pages/Inicio';
import Reglas from './pages/Reglas';
import Juego from './pages/Juego';
import Ganaste from './pages/Ganaste';
import Perdiste from './pages/Perdiste';

import './theme/variables.css';
import './App.css';

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/inicio" component={Inicio} />
        <Route exact path="/reglas" component={Reglas} />
        <Route exact path="/juego" component={Juego} />
        <Route exact path="/ganaste" component={Ganaste} />
        <Route exact path="/perdiste" component={Perdiste} />
        <Redirect exact from="/" to="/inicio" />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

export default App;
