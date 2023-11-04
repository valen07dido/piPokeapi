import React from "react";
import { Link } from "react-router-dom";
const Card = (props) => {
  const { id, name, tipos, image, deletePoke } = props;
  return (
    <div>
      {Number(id) ? null : <button onClick={()=>{deletePoke(id)}}>Eliminar Pokemon</button>}
      <h2>{id}</h2>
      <Link to={`/detail/${id}`}>
        <h1>{name}</h1>
      </Link>
      {tipos &&
        tipos.map((tipo, index) => {
          return <h3 key={index}>{tipo}</h3>;
        })}
      <img src={image} alt={name} />
    </div>
  );
};

export default Card;
