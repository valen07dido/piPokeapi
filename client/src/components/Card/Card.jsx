import React from "react";
import { Link } from "react-router-dom";
import styles from "./Card.module.css";
const Card = (props) => {
  const { id, name, tipos, image } = props;
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        
        <h3 className={styles.text}>id:{id}</h3>
        <Link to={`/detail/${id}`}>
          <h3 className={styles.text}>nombre:{name}</h3>
        </Link>
        {tipos &&
          tipos.map((tipo, index) => {
            return (
              <h3 key={index} className={styles.text}>
                tipo:{tipo}
              </h3>
            );
          })}
      </div>
      <img src={image} alt={name} className={styles.imagen} />
    </div>
  );
};


export default Card;
