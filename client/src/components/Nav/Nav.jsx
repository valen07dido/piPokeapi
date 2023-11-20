import React, { useState } from "react";
import Searchbar from "../SearchBar/Searchbar";
import { Link } from "react-router-dom";
import {
  OrderAlpha,
  OrderAttacks,
  filterBddApi,
  filterType,
  ChangeAux,
  ClearFilters,
} from "../../redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import styles from "./Nav.module.css";
import logo from "./img/header.png";

const Nav = () => {
  const Tipos = useSelector((state) => state.Tipos);
  const dispatch = useDispatch();
  const [isOpen, setIsOpen] = useState(false);
  const { pathname } = useLocation();

  const handlerActive = () => {
    setIsOpen(!isOpen);
  };
  const cleanFilters = () => {
    dispatch(ClearFilters());
  };

  const handleFilter = (event) => {
    dispatch(filterType(event.target.value));
    setIsOpen(!isOpen);
  };
  const filterBDDapi = (event) => {
    dispatch(filterBddApi(event.target.value));
    setIsOpen(!isOpen);
  };
  const OrderByAlpha = (event) => {
    dispatch(OrderAlpha(event.target.value));
    dispatch(ChangeAux());
    setIsOpen(!isOpen);
  };
  const OrderByAttack = (event) => {
    dispatch(OrderAttacks(event.target.value));
    dispatch(ChangeAux());
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <div className={styles.content}>
        <div className={styles.contentButtons}>
          <Link to="/home">
            <img
              src={logo}
              alt="inicio"
              onClick={() => {}}
              className={styles.inicio}
            />
          </Link>
          <button onClick={handlerActive} className={styles.menu}>
            ≡
          </button>
        </div>
        {isOpen ? (
          <div className={`${styles.desplegado} ${isOpen ? "open" : ""}`}>
            <Link to={"/create"}>
              <button onClick={handlerActive} className={styles.button}>
                Crear pokemon
              </button>
            </Link>

            {pathname === "/home" && (
              <div className={styles.Contentselects}>
                <button
                  onClick={() => {
                    cleanFilters();
                  }}
                  className={styles.button}
                >
                  limpiar filtros
                </button>
                <select onChange={handleFilter} className={styles.selects}>
                  <option value="">Filtrar por Tipo</option>
                  {Tipos.map((tipo) => (
                    <option key={tipo.id} value={tipo.nombre}>
                      {tipo.nombre}
                    </option>
                  ))}
                </select>
                <select onChange={filterBDDapi} className={styles.selects}>
                  <option value="">Filtrar por origen</option>
                  <option value="BDD">Creados</option>
                  <option value="api">Existentes</option>
                </select>
                <select onChange={OrderByAlpha} className={styles.selects}>
                  <option value="normal">Ordenar alfabeticamente</option>
                  <option value="A">Ascendente</option>
                  <option value="D">Descendente</option>
                </select>
                <select onChange={OrderByAttack} className={styles.selects}>
                  <option value="">Ordenar por Ataque</option>
                  <option value="A">Ascendente</option>
                  <option value="D">Descendente</option>
                </select>
              </div>
            )}
          </div>
        ) : null}
      </div>
      <div className={styles.search}>
        <Searchbar />
      </div>
    </div>
  );
};

export default Nav;
