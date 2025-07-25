import { IonContent, IonPage } from '@ionic/react';
import '../App.css';

const Ganaste: React.FC = () => {
  const volverAlInicio = () => {
    sessionStorage.removeItem('desdeInicio');
    window.location.href = '/';
  };

  return (
    <IonPage>
      <IonContent fullscreen className="inicio-content">
        <div className="inicio-container">
          <h1 className="inicio-titulo">¡Ganaste!</h1>
          <p className="inicio-subtitulo">Lograste cruzar el río sin romper ninguna regla.</p>
          <button className="inicio-boton" onClick={volverAlInicio}>
            Volver al Inicio
          </button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Ganaste;
