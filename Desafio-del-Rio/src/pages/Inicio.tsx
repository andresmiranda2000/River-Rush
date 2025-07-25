import { IonContent, IonPage } from '@ionic/react';
import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import '../App.css';

const Inicio: React.FC = () => {
  const history = useHistory();

  useEffect(() => {
    sessionStorage.setItem('desdeInicio', 'true');
  }, []);

  return (
    <IonPage>
      <IonContent fullscreen className="inicio-content">
        <div className="inicio-container">
          <h1 className="inicio-titulo">River Rush</h1>
          <button className="inicio-boton" onClick={() => history.push('/juego')}>
            Jugar
          </button>
          <button className="inicio-boton" onClick={() => history.push('/reglas')}>
            Ver Reglas
          </button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Inicio;
