import { useSelector } from "react-redux"
const Search = () => {
  const Pokemon = useSelector((state) => state.SearchPokemon)
  console.log(Pokemon);
  return (
    
    <div>Search</div>
  )
}

export default Search