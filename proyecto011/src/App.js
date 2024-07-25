import './App.css';
import { useState } from 'react';

function App() {

  const [numero, setNumero] = useState("");
  
  function cambiarNumero(e){
    const entrada = e.target.value;
    console.log(entrada.length);

    let cantidad = 0;
    for (let i = 0; i < entrada.length; i++) {
      if (entrada[i] === "0" || entrada[i] === "1"){
        cantidad++;
      }

      if (cantidad === entrada.length) {
        setNumero(entrada);
      }
    }
  }

  return (
    <div>
      <h1>Validar número binario</h1>
      <input type="text" onChange={cambiarNumero} value={numero} />
      <p>{numero}</p>
    </div>
  );
}

export default App;
