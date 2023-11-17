import React from "react";
import Card from "../Card/CArd";
import styles from './Cards.module.css'

const Cards = (props) => {
  const { Pokemons, handlerPrev, handlerNext,deletePoke } = props;
  return (
    <div>
      <button onClick={handlerPrev} className={styles.button}>{'<<'}</button>
      <button onClick={handlerNext} className={styles.button}>{'>>'}</button>
      <div  className={styles.container}>

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
    </div>
  );
};

export default Cards;
