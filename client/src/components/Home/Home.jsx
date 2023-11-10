import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { ChangeAux, DeleteChar, GetTypes, addChar } from "../../redux/Actions";

const URL = import.meta.env.VITE_URL;
const itemsForPage = 12;

const Home = () => {
  const dispatch = useDispatch();
  let Pokemons = useSelector((state) => state.Pokemones);
  const aux = useSelector((state) => state.aux);
  const [datos, setDatos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const filtrado = useSelector((state) => state.PokemonesCopy);


  if (filtrado !== null && filtrado.length > 0) {
    Pokemons = filtrado;
    console.log(filtrado);
  }
  // trae los personajes
  useEffect(() => {
    dispatch(addChar());
    dispatch(GetTypes());
    console.log("se hizo dispatch");
  }, [dispatch]);

  //guarda los characters en datos para poder hacer el paginado

  useEffect(() => {
    if (Pokemons && Pokemons.length > 0) {
      setDatos([...Pokemons].slice(0, itemsForPage));
    }
    console.log('me ejecute');
  }, [filtrado, Pokemons]);

  const deletePoke = (id) => {
    dispatch(DeleteChar(id));
  };

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
          deletePoke={deletePoke}
        />
      ) : (
        <h2>cargando</h2>
      )}
    </div>
  );
};

export default Home;
