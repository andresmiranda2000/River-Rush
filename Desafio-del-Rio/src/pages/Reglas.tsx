import { IonContent, IonPage } from '@ionic/react';
import { useHistory } from 'react-router-dom';
import '../App.css';

const Reglas: React.FC = () => {
  const history = useHistory();

  const jugar = () => {
    history.push('/juego');
  };

  const volverInicio = () => {
    sessionStorage.removeItem('desdeInicio');
    history.push('/Inicio');
  };

  return (
    <IonPage>
      <IonContent
        fullscreen
        className="reglas-content"
        style={{
          backgroundImage: `url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGVdg0OOIGaI3IZGTsoPgcOHNZXOYC81Rrkw&s')`,
        }}
      >
        <div className="reglas-container">
          <h1 className="reglas-titulo">Reglas del Juego</h1>
          <p className="reglas-texto">
            1. Solo puedes llevar un elemento por vez.{"\n"}
            2. No puedes dejar al lobo con la cabra.{"\n"}
            3. No puedes dejar a la cabra con las coles.{"\n"}
            4. Gana si logras cruzar todo sin romper las reglas.
          </p>
          <button className="reglas-boton" onClick={jugar}>
            Jugar Ahora
          </button>
          <button className="reglas-boton" onClick={volverInicio}>
            Volver al Inicio
          </button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Reglas;