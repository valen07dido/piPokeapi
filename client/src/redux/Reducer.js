const initialstate = {
  Pokemones: [],
  SearchPokemon: [],
  PokemonCreated: [],
};
const rootReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case "ADD_CHAR":
      return { ...state, Pokemones: payload };
    case "GET_BY_ID":
      return { ...state, SearchPokemon: payload };
    case "GET_BY_NAME":
      return { ...state, SearchPokemon: payload };
    case "CLEAR_CHAR":
      return { ...state, SearchPokemon: [] };
    case "CREATE_CHAR":
      return { ...state, PokemonCreated: [...state.PokemonCreated, payload] };
    case "DELETE_CHAR":
      return {
        ...state,
        Pokemones: state.Pokemones.filter((pokemon) => pokemon.id !== payload),
        PokemonCreated: state.PokemonCreated.filter((pokemon) => pokemon.id !== payload),
      };
    case "CREATED_POKEMONS":
      return { ...state, PokemonCreated: payload };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
