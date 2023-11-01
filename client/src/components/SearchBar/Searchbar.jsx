import React, { useState } from "react";
import { Link } from "react-router-dom";
import { getById, getByName } from "../../redux/Actions";
import { useDispatch } from "react-redux";
const Searchbar = () => {
  const [valor, setValor] = useState("");
  const Dispatch = useDispatch();

  const handleChange = (event) => {
    setValor(event.target.value);
  };
  const handleSearch = (value) => {
    if (!isNaN(valor)) {
      console.log("is a number");
      Dispatch(getById(valor));
    } else if (
      /[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-4[0-9A-Fa-f]{3}-[89ABab][0-9A-Fa-f]{3}-[0-9A-Fa-f]{12}/.test(
        valor
      )
    ) {
      console.log("is a number");

      Dispatch(getById(valor));
    } else {
      console.log("is a name");

      Dispatch(getByName(valor));
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="ingrese nombre o ID de su personaje...🔍"
        onChange={handleChange}
        value={valor}
      />
      <Link to={"/search"}>
        <button
          onClick={() => {
            handleSearch(valor);
            setValor("");
          }}
        >
          🔍
        </button>
      </Link>
    </div>
  );
};

export default Searchbar;
