import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getById, getByName } from "../../redux/Actions";
import { useDispatch } from "react-redux";
import styles from "./Searchbar.module.css";
const Searchbar = () => {
  const [valor, setValor] = useState("");
  const Dispatch = useDispatch();

  const handleChange = (event) => {
    setValor(event.target.value);
  };
  const handleSearch = (value) => {
    if (!isNaN(valor)) {
      Dispatch(getById(valor));
    } else if (
      /[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}/.test(
        valor
      )
    ) {

      Dispatch(getById(valor));
    } else {

      Dispatch(getByName(valor));
    }
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="ingrese nombre o ID de su personaje...🔍"
        onChange={handleChange}
        value={valor}
        className={styles.text}
      />
      <Link to={"/search"}>
        <button
          onClick={() => {
            handleSearch(valor);
            setValor("");
          }}
          className={styles.boton}
        >
          🔍
        </button>
      </Link>
    </div>
  );
};

export default Searchbar;
