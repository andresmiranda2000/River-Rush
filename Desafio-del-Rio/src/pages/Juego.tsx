import { IonContent, IonPage } from '@ionic/react';
import { useState, useEffect } from 'react';
import '../App.css';

const Juego: React.FC = () => {

  useEffect(() => {
    if (!sessionStorage.getItem('desdeInicio')) {
      window.location.href = '/';
    }
  }, []);

  const [left, setLeft] = useState(['🐺', '🐐', '🌽']);
  const [right, setRight] = useState<string[]>([]);
  const [position, setPosition] = useState<'left' | 'right'>('left');
  const [cargo, setCargo] = useState<string | null>(null);
  const [mensaje, setMensaje] = useState<string>('');

  const cargar = (item: string) => {
    if (cargo !== null) {
      setMensaje('Solo puedes llevar un elemento a la vez.');
      return;
    }
    if (item === '🧍') {
      setCargo(null);
      setMensaje('Cruzarás solo.');
    } else {
      setCargo(item);
      setMensaje(`Llevas: ${item}`);
      if (position === 'left') setLeft(prev => prev.filter(i => i !== item));
      else setRight(prev => prev.filter(i => i !== item));
    }
  };

  const cruzar = () => {
    const newPosition = position === 'left' ? 'right' : 'left';
    if (cargo) {
      if (newPosition === 'left') setLeft(prev => [...prev, cargo]);
      else setRight(prev => [...prev, cargo]);
    }
    setCargo(null);
    setPosition(newPosition);
    setMensaje('Has cruzado al otro lado.');
    setTimeout(verificarEstado, 300);
  };

  const verificarEstado = () => {
    const check = (side: string[]) => {
      const hasCabra = side.includes('🐐');
      const hasLobo = side.includes('🐺');
      const hasColes = side.includes('🌽');
      if (hasCabra && hasLobo) return 'perdiste';
      if (hasCabra && hasColes) return 'perdiste';
      return 'bien';
    };

    const ladoSinJugador = position === 'left' ? right : left;
    const estado = check(ladoSinJugador);

    if (estado === 'perdiste') {
      reiniciar();
      window.location.href = '/perdiste';
    } else if (left.length === 0 && position === 'right') {
      reiniciar();
      window.location.href = '/ganaste';
    }
  };

  const reiniciar = () => {
    setLeft(['🐺', '🐐', '🌽']);
    setRight([]);
    setPosition('left');
    setCargo(null);
    setMensaje('');
    sessionStorage.setItem('desdeInicio', 'true');
  };

  const volverInicio = () => {
    sessionStorage.clear();
    window.location.href = '/';
  };

  return (
    <IonPage>
      <IonContent fullscreen className="juego-content">
        <h2 className="personajes">Orilla Izquierda</h2>
        <div className="juego-zona">
          {position === 'left' && <span>🧍</span>}
          {left.map((item, i) => <span key={i}>{item}</span>)}
        </div>

        <h2 className="personajes">Orilla Derecha</h2>
        <div className="juego-zona">
          {position === 'right' && <span>🧍</span>}
          {right.map((item, i) => <span key={i}>{item}</span>)}
        </div>

        <h3 className="personajes">¿A quién llevas contigo?</h3>
        {mensaje && <p className="mensaje">{mensaje}</p>}

        <div className="juego-botones">
          {(position === 'left' ? left : right).map((item, i) => (
            <button key={i} className="juego-boton" onClick={() => cargar(item)}>
              {item}
            </button>
          ))}
          <button className="juego-boton" onClick={() => cargar('🧍')}>Solo</button>
          <button className="juego-boton" onClick={cruzar}>Cruzar</button>
          <button className="juego-boton" onClick={reiniciar}>Reiniciar Juego</button>
          <button className="juego-boton" onClick={volverInicio}>Volver al Inicio</button>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Juego;
