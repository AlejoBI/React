import './App.css';
import { useState } from 'react';

function App() {

  const [texto, setTexto] = useState("");

  function cambiarTexto(e){
    setTexto(e.target.value);
  }

  return (
    <div>
      <p>
        <textarea rows="5" cols="100" value={texto} onChange={cambiarTexto}></textarea> 
      </p>
      <p>
        <textarea rows="5" cols="100" value={texto} readOnly></textarea>
      </p>
      <p>Cantidad de caracteres: {texto.length}</p>
    </div>
  );
}

export default App;
