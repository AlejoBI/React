import './App.css';

function realizarOperacion(e) {
  e.preventDefault();
  const v1 = parseInt(e.target.valor1.value);
  const v2 = parseInt(e.target.valor2.value);
  const resultado = v1 + v2;
  alert(resultado);
}  

function App() {
  return (
    <div>
      <form onSubmit={ realizarOperacion }>
        <p> Primer valor: 
          <input type="number" name="valor1"/>
        </p>
        <p> Segundo valor:
          <input type="number" name="valor2"/>
        </p>
        <p>
          <input type='submit' name='sumar'/>
        </p>
      </form>
    </div>
  );
}

export default App;
