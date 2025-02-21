import './Peticion.css';
import { useContext, useEffect } from 'react';
import { PeticionContext } from '../../context/Peticion.context';

function Peticion() {
  const peticionContex = useContext(PeticionContext);

  useEffect(() => {
    if (peticionContex) {
      peticionContex.getTarjetas();
    }
  }, [peticionContex]);

  if (!peticionContex) {
    return <p>Loading...</p>;
  }

  const { tarjetas, error } = peticionContex;

  const renderTarjetas = () => {
    return tarjetas.map((tarjeta) => (
      <div key={tarjeta.id} className="tarjeta">
        <h2>{tarjeta.roman_name}</h2>
        <img src={tarjeta.filename} alt={tarjeta.roman_name} />
        <p>Tipo: {tarjeta.type}</p>
        <p>{tarjeta.id}</p>
      </div>
    ));
  };

  return (
    <>
      {error && <p>Error</p>}
      <div id="peticion">{renderTarjetas()}</div>
    </>
  );
}

export default Peticion;
