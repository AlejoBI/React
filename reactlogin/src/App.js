import './App.css';


function mostrarTitulo(titulo) {
  return (
    <h1>{ titulo }</h1>
  )
}

function App() {
  const buscadores = ["https://www.google.com", "https://www.bing.com", "https://www.yahoo.com"]
  const titulo2 = "Si señor"

  return (
    
    <div>
      { mostrarTitulo("Hola mundo") }
      { mostrarTitulo(titulo2) }

      <a href={ buscadores[0] }> google </a>
      <a href={ buscadores[1] }> bing </a>
      <a href={ buscadores[2] }> yahoo </a>
    </div>
    
  );
}

export default App;
