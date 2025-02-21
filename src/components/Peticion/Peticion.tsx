import './Peticion.css';
import { useContext, useEffect, useState } from 'react';
import { PeticionContext } from '../../context/Peticion.context';

interface Tarjeta {
  id: number;
  roman_name: string;
  filename: string;
  type: string;
}

function Peticion() {
  const peticionContex = useContext(PeticionContext);
  const [visibleTarjetas, setVisibleTarjetas] = useState<Tarjeta[]>([]);
  const [page, setPage] = useState(1);
  const itemsPerPage = 6;

  useEffect(() => {
    if (peticionContex) {
      peticionContex.getTarjetas();
    }
  }, [peticionContex]);

  useEffect(() => {
    if (peticionContex?.tarjetas) {
      const newVisibleTarjetas = peticionContex.tarjetas.slice(
        0,
        page * itemsPerPage
      );
      setVisibleTarjetas(newVisibleTarjetas);
    }
  }, [peticionContex, page]);

  useEffect(() => {
    const handleScroll = () => {
      if (
        window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight
      )
        return;
      setPage((prevPage) => prevPage + 1);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  if (!peticionContex) {
    return <p>Loading...</p>;
  }

  const { error } = peticionContex;

  const renderTarjetas = () => {
    return visibleTarjetas.map((tarjeta) => (
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
