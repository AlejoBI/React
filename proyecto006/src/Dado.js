import './Dado.css';

function Dado(props) {
  return (
    <div className='dado-recuadro'>
      <h1>{props.numero}</h1>
    </div>
  );
}

export default Dado;