import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  function generarAleatorios() {
    const vector = new Array(5); // or []
    for (let i = 0; i < 5; i++) {
      vector[i] = Math.floor(Math.random() * 10);
    }
    setValores(vector);
  }

  const [valores, setValores] = useState([0,0,0,0,0]);

  return (
    <div>
      <p>Numeros aleatorios:  { valores } </p>
      
      {valores.map( num => (
        <p>{num}</p>
      ))}

      <button onClick={ generarAleatorios }>Generar</button>
    </div>
  );
}

export default App;
