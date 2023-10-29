import React from "react";
import axios from "axios";
import { useEffect, useState } from "react";
import Cards from "../Cards/Cards";
const URL = import.meta.env.VITE_URL;
const itemsForPage = 12;

const Home = () => {
  const [Pokemons, setPokemons] = useState([]);
  const [datos, setDatos] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);

  // trae los personajes
  useEffect(() => {
    axios
      .get(URL)
      .then((response) => {
        const data = response.data;

        if (data) {
          setPokemons(data);
          setDatos([...data].splice(0, itemsForPage))
        } else {
          throw new Error("no se pudo traer los datos");
        }
      })
      .catch((error) => {
        console.log("Hubo un error al obtener los datos", error);
      });
  }, []);
  console.log(datos);

  const handlerNext = () => {
    const totalElements = Pokemons.length;
    const nextPage = currentPage + 1;
    const firstIndex = nextPage * itemsForPage;
    if (firstIndex === totalElements) return;
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
      {Pokemons.length > 0 ? <Cards Pokemons={datos}  handlerNext={handlerNext} handlerPrev={handlerPrev}/> : <h2>cargando</h2>}
    </div>
  );
};

export default Home;
