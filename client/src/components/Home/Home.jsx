import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { addChar } from "../../redux/Actions";

const URL = import.meta.env.VITE_URL;
const itemsForPage = 12;

const Home = () => {
  const dispatch = useDispatch();
  const Pokemons = useSelector((state) => state.Pokemones);
  const [datos, setDatos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  // trae los personajes
  useEffect(() => {
    dispatch(addChar());
  }, [dispatch]);
  //guarda los characters en datos para poder hacer el paginadov
  useEffect(() => {
    if (Pokemons && Pokemons.length > 0) {
      setDatos([...Pokemons].splice(0, itemsForPage));
    }
  }, [Pokemons]);

  const handlerNext = () => {
    const totalElements = Pokemons.length;
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * itemsForPage;
    if (firstIndex >= totalElements) return;
    setDatos([...Pokemons].slice(firstIndex, firstIndex + itemsForPage));
    setCurrentPage(nextPage);
  };

  const handlerPrev = () => {
    const prevPage = currentPage - 1;
    const firstIndex = prevPage * itemsForPage;
    if (firstIndex < 0) return;
    setDatos([...Pokemons].slice(firstIndex, firstIndex + itemsForPage));
    setCurrentPage(prevPage);
  };

  return (
    <div>
      {Pokemons && Pokemons.length > 0 ? (
        <Cards
          Pokemons={datos}
          handlerNext={handlerNext}
          handlerPrev={handlerPrev}
        />
      ) : (
        <h2>cargando</h2>
      )}
    </div>
  );
};

export default Home;
