import React from "react";
import Card from "../Card/CArd";

const Cards = (props) => {
  const { Pokemons, handlerPrev, handlerNext,deletePoke } = props;
  return (
    <div>
      <button onClick={handlerPrev}>prev</button>
      <button onClick={handlerNext}>next</button>
      {Pokemons.map((pokemon) => {
        return (
          <Card
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
            tipos={pokemon.tipos}
            deletePoke={deletePoke}
          />
        );
      })}
    </div>
  );
};

export default Cards;
