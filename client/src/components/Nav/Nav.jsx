import React, { useState } from "react";
import Searchbar from "../SearchBar/Searchbar";
import { Link } from "react-router-dom";
import {
  OrderAlpha,
  OrderAttacks,
  filterBddApi,
  filterType,
  ChangeAux,
} from "../../redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";

const Nav = () => {
  const Tipos = useSelector((state) => state.Tipos);
  const dispatch = useDispatch();
  const [active, setActive] = useState(false);
  const { pathname } = useLocation();
  console.log(pathname);

  const handlerActive = () => {
    if (active) setActive(false);
    if (!active) setActive(true);
  };

  const handleFilter = (event) => {
    dispatch(filterType(event.target.value));
  };
  const filterBDDapi = (event) => {
    dispatch(filterBddApi(event.target.value));
  };
  const OrderByAlpha = (event) => {
    dispatch(OrderAlpha(event.target.value));
    dispatch(ChangeAux());
  };
  const OrderByAttack = (event) => {
    dispatch(OrderAttacks(event.target.value));
    dispatch(ChangeAux());
  };
  console.log(active);
  return (
    <div>
      <button onClick={handlerActive}>≡</button>
      {active ? (
        <div>
          <Link to="/home">
            <button onClick={handlerActive}>Inicio</button>
          </Link>
          <Link to={"/create"}>
            <button onClick={handlerActive}>Crear pokemon</button>
          </Link>
          {pathname === "/home" && (
            <div>
              <select onChange={handleFilter}>
                <option value="">Filtrar por Tipo</option>
                {Tipos.map((tipo) => (
                  <option key={tipo.id} value={tipo.nombre}>
                    {tipo.nombre}
                  </option>
                ))}
              </select>
              <select onChange={filterBDDapi}>
                <option value="">Filtrar por origen</option>
                <option value="BDD">Creados</option>
                <option value="api">Existentes</option>
              </select>
              <select onChange={OrderByAlpha}>
                <option value="normal">Ordenar alfabeticamente</option>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
              </select>
              <select onChange={OrderByAttack}>
                <option value="">Ordenar por Ataque</option>
                <option value="A">Ascendente</option>
                <option value="D">Descendente</option>
              </select>
            </div>
          )}
        </div>
      ) : null}
      <Searchbar />
    </div>
  );
};

export default Nav;
