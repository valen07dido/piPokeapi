import React, { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
import { useDispatch, useSelector } from "react-redux";
import { ChangeAux, GetTypes, addChar } from "../../redux/Actions";
import loading from "./img/loading.gif";
import styles from "./Home.module.css";
import Paginado from "../Paginado/Paginado";
import Footer from "../Footer/Footer";
const URL = import.meta.env.VITE_URL;

const Home = () => {
  const dispatch = useDispatch();
  let Pokemons = useSelector((state) => state.Pokemones);
  const [paginaActual, setPaginaActual] = useState(1);
  const filtrado = useSelector((state) => state.PokemonesCopy);
  const [itemsForPage, setItemsForPage] = useState(12);
  const ultimoPokemon = paginaActual * itemsForPage;
  const primerPokemon = ultimoPokemon - itemsForPage;
  if (filtrado.length > 0) {
    Pokemons = filtrado;
  }
  const PokemonActual = Pokemons.slice(primerPokemon, ultimoPokemon);
  useEffect(() => {
    dispatch(addChar());
    dispatch(GetTypes());
  }, [dispatch]);

  const paginado = (pageNumber) => {
    setPaginaActual(pageNumber);
  };

  return (
    <div>
      <Paginado
        Pokemons={Pokemons.length}
        itemsForPage={itemsForPage}
        paginado={paginado}
        setPaginaActual={setPaginaActual}
        paginaActual={paginaActual}
      />
      {PokemonActual && PokemonActual.length > 0 ? (
        <Cards Pokemons={PokemonActual} />
      ) : (
        <div className={styles.container}>
          <img src={loading} alt="cargando..." className={styles.loading} />
          <h3 className={styles.text}>Cargando...</h3>
        </div>
      )}
      <Footer/>
    </div>
  );
};

export default Home;
