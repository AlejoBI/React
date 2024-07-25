import './App.css';
import { useState } from 'react';

function App() {

  const [estudios, setEstudios] = useState("Primaria");

  function cambiarEstudios(e){
    setEstudios(e.target.value);
  }

  return (
    <div>
      <input type="radio" value="Primaria" onChange={cambiarEstudios} checked={estudios === "Primaria"} /> Primaria
      <input type="radio" value="Secundaria" onChange={cambiarEstudios} checked={estudios === "Secundaria"} /> Secundaria
      <input type="radio" value="Bachillerato" onChange={cambiarEstudios} checked={estudios === "Bachillerato"} /> Bachillerato
      <input type="radio" value="Universidad" onChange={cambiarEstudios} checked={estudios === "Universidad"} /> Universidad
      <p>Estudio seleccionado: {estudios}</p>
    </div>
  );
}

export default App;
