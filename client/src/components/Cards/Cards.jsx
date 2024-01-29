import React from "react";
import Card from "../Card/Card";
import styles from './Cards.module.css'

const Cards = (props) => {
  const { Pokemons} = props;
  return (
    <div>
      <div  className={styles.container}>

      {Pokemons.map((pokemon) => {
        return (
          <Card
          key={pokemon.id}
          id={pokemon.id}
          name={pokemon.name}
          image={pokemon.image}
          tipos={pokemon.tipos}
          />
          );
        })}
        </div>
    </div>
  );
};

export default Cards;
