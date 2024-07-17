import logo from './logo.svg';
import './App.css';
import React from 'react';
import Dado from './Dado';

function App() {

  function generarValor() {
    return Math.trunc(Math.random() * 6)+1;
  }

  function tirarDados() {
    setValor1(generarValor());
    setValor2(generarValor());
    setValor3(generarValor());
  }

  const [valor1, setValor1] = React.useState(0);
  const [valor2, setValor2] = React.useState(0);
  const [valor3, setValor3] = React.useState(0);

  return (
    <div>
      <Dado numero={valor1} />
      <Dado numero={valor2} />
      <Dado numero={valor3} />
      <button onClick={tirarDados}>Tirar dados</button>
    </div>
  );
}

export default App;
