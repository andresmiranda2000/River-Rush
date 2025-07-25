import { IonContent, IonPage } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import '../App.css';

const Perdiste: React.FC = () => {
  const history = useHistory();

  return (
    <IonPage>
      <IonContent fullscreen className="inicio-content">
        <div className="inicio-container">
          <h1 className="perdiste-titulo">¡Perdiste!</h1>
          <p className="inicio-subtitulo">Algo se comió a otro... ¡Intenta otra vez!</p>
          <button className="inicio-boton" onClick={() => history.push('/')}>
            Volver al Inicio
          </button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Perdiste;
