import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  function generarAleatorio() {
    const v = Math.trunc(Math.random() * 10);
    setValor(v);
  }

  const [valor, setValor] = useState(0);

  return (
    <div>
      <p>Numero aleatorio:  { valor } </p>
      <button onClick={ generarAleatorio }>Generar</button>
    </div>
  );
}

export default App;
