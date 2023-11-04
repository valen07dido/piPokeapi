import { useSelector } from "react-redux";
import Card from "../Card/CArd";
const Search = () => {
  const Pokemon = useSelector((state) => state.SearchPokemon);
  console.log(Pokemon);
  return (
    <div>
      {Pokemon? (
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
