import { useEffect } from "react";
import { useLocation } from "react-router";
import { clearChar, getById, DeleteChar, ChangeAux } from "../../redux/Actions";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/es/hooks/useSelector";
import { useNavigate } from "react-router";
import styles from "./Detail.module.css";


const Detail = () => {
  const navigate = useNavigate()
  const { pathname } = useLocation();
  const id = pathname.split("/").pop();
  const dispatch = useDispatch();
  let Pokemon = useSelector((state) => state.SearchPokemon);

  const deletePoke = (id) => {
    dispatch(DeleteChar(id));
    dispatch(ChangeAux())
    navigate('/home')
    window.alert('personaje eliminado exitosamente')
  };
  useEffect(() => {
    dispatch(getById(id));
    return () => {
      dispatch(clearChar());
    };
  }, []);
  return (
    <div className={styles.mainContainer}>
      {Number(Pokemon.id) ? null : (
        <button className={styles.deleteButton} onClick={() => deletePoke(Pokemon.id)}>
          Eliminar Pokemon
        </button>
      )}
      {Pokemon && Pokemon.length !== 0 ? (
        <div className={styles.container}>
          <div className={styles.firstCont}>
            <h3 className={styles.name}>{Pokemon.name}</h3>
            <h3 className={styles.id}>ID:{Pokemon.id}</h3>
            <div className={styles.imageContainer}>
              <img
                src={Pokemon.image}
                alt={Pokemon.name}
                className={styles.imagen}
              />
            </div>
          </div>
          <div className={styles.dataContainer}>
            <div className={styles.datos}>
              <h3 className={styles.dato}>Nivel de vida:{Pokemon.vida}</h3>
              <h3 className={styles.dato}>Poder de ataque:{Pokemon.ataque}</h3>
              <h3 className={styles.dato}>
                Nivel de defensa:{Pokemon.defensa}
              </h3>
            </div>
            <div className={styles.datos}>
              <h3 className={styles.dato}>
                Nivel de velocidad:{Pokemon.velocidad}
              </h3>
              <h3 className={styles.dato}>Altura:{Pokemon.height}</h3>
              <h3 className={styles.dato}>Peso:{Pokemon.weight}</h3>
            </div>
          </div>
          <div className={styles.typeContainer}>
            {Pokemon.tipos &&
              Pokemon.tipos.map((tipo, index) => (
                <h3 key={index} className={styles.tipo}>
                  Tipo: {tipo.nombre}
                </h3>
              ))}
          </div>
        </div>
      ) : (
        <h2 className={styles.loading}>cargando...</h2>
      )}
    </div>
  );
};

export default Detail;
