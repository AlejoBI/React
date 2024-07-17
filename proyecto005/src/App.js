import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {

  function agregarArticulo() {
    setArticulos([...articulos, { id: articulos.length + 1, nombre: `Articulo ${articulos.length + 1}`, precio: 100 * (articulos.length + 1) }])
  }

  function eliminarArticulo(id) {
    setArticulos(articulos.filter(articulo => articulo.id !== id))
  }

  function editarArticulo(id) {
    setArticulos(articulos.map(articulo => {
      if (articulo.id === id) {
        return { ...articulo, nombre: 'Articulo Editado', precio: 999 }
      } else {
        return articulo
      }
    }
    ))
  }

  function eliminarUltimaFila() {
    setArticulos(articulos.slice(0, articulos.length - 1))
  }

  const [articulos, setArticulos] = useState([
    { id: 1, nombre: 'Articulo 1', precio: 100 },
    { id: 2, nombre: 'Articulo 2', precio: 200 },
    { id: 3, nombre: 'Articulo 3', precio: 300 },
    { id: 4, nombre: 'Articulo 4', precio: 400 },
    { id: 5, nombre: 'Articulo 5', precio: 500 }
  ])

  return (
    <div>
      <button onClick={agregarArticulo}>Agregar Articulo</button>
      <button onClick={eliminarUltimaFila}>Eliminar Ultima Fila</button>
      <table border = "1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {articulos.map(articulo => (
            <tr key={articulo.id}>
              <td>{articulo.id}</td>
              <td>{articulo.nombre}</td>
              <td>{articulo.precio}</td>
              <td>
                <button onClick={() => eliminarArticulo(articulo.id)}>Eliminar</button>
                <button onClick={() => editarArticulo(articulo.id)}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
