import React from "react";
import styles from "./Landing.module.css";
import header from './img/header.png'
import pokebola from './img/pokebola.png'
import pikachu from './img/pikachu.png'

const Landing = (props) => {
    const {handleSubmit}=props
  return (
    <div className={styles.container}>
      <img src={header} alt="header" className={styles.header} />
      <h1 className={styles.titulo}>Bienvenidos a la pokePagina😁</h1>
     <img src={pokebola} alt='ingreso' onClick={handleSubmit}className={styles.pokebola} />
      <h4>⬆️haz click en la pokebola⬆️</h4>
     <img src={pikachu} alt={pikachu} className={styles.pikachu}/>
    </div>
  );
};

export default Landing;
