import { useSelector } from "react-redux";
import Card from "../Card/CArd.jsx";
import styles from './Search.module.css'
const Search = () => {
  const Pokemon = useSelector((state) => state.SearchPokemon);
  return (
    <div className={styles.container}>
      {Pokemon&& Pokemon.ataque? (
        <Card
          key={Pokemon.id}
          id={Pokemon.id}
          name={Pokemon.name}
          image={Pokemon.image}
          tipos={Pokemon.tipos}
        />
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default Search;
