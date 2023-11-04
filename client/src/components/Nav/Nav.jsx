import React, { useState } from "react";
import Searchbar from "../SearchBar/Searchbar";
import { Link } from "react-router-dom";

const Nav = () => {
  const [active, setActive] = useState(false);
  const handlerActive = () => {
    if (active) setActive(false);
    if (!active) setActive(true);
  };
  console.log(active);
  return (
    <div>
      <button onClick={handlerActive}>≡</button>
      {active ? (
        <div>
          <Link to="/home">
            <button onClick={handlerActive} >Inicio</button>
          </Link>
          <Link to={"/create"}>
            <button onClick={handlerActive}>Crear pokemon</button>
          </Link>
          <Link to={"/myPokemons"}>
            <button onClick={handlerActive}>Mis Pokemons </button>
          </Link>
        </div>
      ) : null}
      <Searchbar />
    </div>
  );
};

export default Nav;
