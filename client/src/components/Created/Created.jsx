import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CreatedPokemons, DeleteChar } from "../../redux/Actions";
import Card from "../Card/CArd";
const Created = () => {
  const [aux,setAux]=useState(true)
  const dispatch = useDispatch();
const PokemonsCreados=useSelector((state) => state.PokemonCreated)
  useEffect(() => {
    dispatch(CreatedPokemons());
  }, [aux]);
  const deletePoke=(id)=>{
    dispatch(DeleteChar(id))
    setAux(!aux)
  }
  console.log(PokemonsCreados)
  return <div>
          {PokemonsCreados&&PokemonsCreados.map((pokemon) => {
        return (
          <Card
            deletePoke={deletePoke}
            key={pokemon.id}
            id={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
            tipos={pokemon.tipos}
          />
        );
      })}
  </div>;
};

export default Created;
