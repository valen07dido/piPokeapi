import React from "react";
import styles from "./Paginado.module.css";

const Paginado = ({
  Pokemons,
  itemsForPage,
  paginado,
  setPaginaActual,
  paginaActual,
}) => {
  const pageNumber = [];
  const totalPagina = Math.ceil(Pokemons / itemsForPage);
  const handlerNext = () => {
    if (paginaActual !== totalPagina) {
      setPaginaActual(paginaActual + 1);
    }
  };
  const handlerPrev = () => {
    if (paginaActual !== 1) {
      setPaginaActual(paginaActual - 1);
    }
  };
  const page =()=>{
    const mitad=Math.round(4/2)
    let hasta=3
    if(paginaActual+mitad>=totalPagina){
        hasta=totalPagina
    }else if(paginaActual> mitad){
        hasta=paginaActual+mitad
    }
    let desde= hasta -3
    if(desde<0)desde=0

    return pageNumber.slice(desde,hasta)
  }
  for (let i = 1; i < totalPagina + 1; i++) {
    pageNumber.push(i);
  }

  return (
    <div className={styles.numbers}>
      <button
        className={styles.button}
        onClick={() => {
          handlerPrev();
        }}
      >
        {"<<"}
      </button>
      {page().map((number) => {
        return (
          <a
            onClick={() => {
              paginado(number);
            }}
            key={number}
            className={`${styles.number} ${
              number === paginaActual ? styles.actual : ""
            }`}
          >
            {number}
          </a>
        );
      })}
      <button
        className={styles.button}
        onClick={() => {
          handlerNext();
        }}
      >
        {">>"}
      </button>
    </div>
  );
};

export default Paginado;
