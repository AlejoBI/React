import './App.css';
import { useState } from 'react';

function App() {
  
  const [datos, setDatos] = useState({
    nombre: '',
    edad: '',
    estudios: false
  });

  function cambiarNombre(e){
    setDatos((valores) => ({
      ...valores,
      nombre: e.target.value
    }));
  }

  function cambiarEdad(e){
    setDatos((valores) => ({
      ...valores,
      edad: e.target.value
    }));
  }

  function cambiarEstudios(e){
    setDatos((valores) => ({
      ...valores,
      estudios: !datos.estudios
    }));
  }

  function enviarDatos(e){
    e.preventDefault();
    alert('Nombre: ' + datos.nombre + '\nEdad: ' + datos.edad + '\nEstudios: ' + datos.estudios);
  }

  return (
    <div>
      <form onSubmit={enviarDatos}>
        <h1>Formulario</h1>
        <label>Nombre:</label>
        <input type="text" onChange={cambiarNombre} value={datos.nombre} />
        <label>Edad:</label>
        <input type="number"onChange={cambiarEdad} value={datos.edad} />
        <label>Estudios:</label>
        <input type="checkbox" onChange={cambiarEstudios} checked={datos.estudios} />
        <input type="submit" value="Enviar" />
      </form>

      <hr />
      <h2>Datos ingresados</h2>
      <p>Nombre: {datos.nombre}</p>
      <p>Edad: {datos.edad}</p>
      <p>Estudios: {datos.estudios ? 'Si' : 'No'}</p>
      
    </div>
  );
}

export default App;
