import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { ChangeAux, GetTypes, addChar } from "../../redux/Actions";
import loading from "./img/loading.gif";
import styles from "./Home.module.css";
const URL = import.meta.env.VITE_URL;
const itemsForPage = 12;

const Home = () => {
  const dispatch = useDispatch();
  let Pokemons = useSelector((state) => state.Pokemones);
  const PokemonesCreados = useSelector((state) => state.PokemonCreated);
  const aux = useSelector((state) => state.aux);
  const [datos, setDatos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const filtrado = useSelector((state) => state.PokemonesCopy);

  if (filtrado !== null && filtrado.length > 0) {
    Pokemons = filtrado;
  }
  // trae los personajes
  useEffect(() => {
    console.log('me ejecute')
    dispatch(addChar());
    dispatch(GetTypes());
  }, [dispatch]);

  //guarda los characters en datos para poder hacer el paginado

  useEffect(() => {
    console.log('me ejecute 2')
    if (Pokemons && Pokemons.length > 0) {
      setDatos([...Pokemons].slice(0, itemsForPage));
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
        <div className={styles.container}>
          <img src={loading} alt="cargando..." className={styles.loading} />
          <h3 className={styles.text}>Cargando...</h3>
        </div>
      )}
    </div>
  );
};

export default Home;
