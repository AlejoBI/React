import './App.css';
import { useState } from 'react';
import { rubros, articulos } from './datos';

function App() {

  const [rubro, setRubro] = useState(rubros[0]);
  const [articulosRubro, setArticulosRubro] = useState(articulos.filter(articulo => articulo.id_rubro === rubro.id));
  const [articulo, setArticulo] = useState(articulosRubro[0]);

  function cambiarRubro(e) {
    setRubro(rubros.find(rubro => rubro.id === Number.parseInt(e.target.value)));
    const articulosrubro = articulos.filter(articulo => articulo.id_rubro === Number.parseInt(e.target.value));
    setArticulosRubro(articulosrubro);
    setArticulo(articulosrubro[0]);
  }

  function cambiarArticulo(e) {
    setArticulo(articulosRubro.find(articulo => articulo.id === Number.parseInt(e.target.value)));
  }

  return (
    <div className='formulario'>
      <div>
        <select value={rubro.id} onChange={cambiarRubro}>
          {rubros.map(rubro => (
            <option key={rubro.id} value={rubro.id}> {rubro.nombre} </option>
          ))}
        </select>
      </div>
      <div>
        <select value={articulo.id} onChange={cambiarArticulo}>
          {articulosRubro.map(articulo => (
            <option key={articulo.id} value={articulo.id}> {articulo.nombre} </option>
          ))}
        </select>
      </div>
      <div>
        <ul>
          <li>Rubro: {rubro.nombre}</li>
          <li>Articulo: {articulo.nombre}</li>
          <li>Precio: {articulo.precio}</li>
        </ul>
      </div>
    </div>
  );
}

export default App;