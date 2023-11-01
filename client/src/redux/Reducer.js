const initialstate = {
  Pokemones: [],
  SearchPokemon: [],
};
const rootReducer = (state = initialstate, { type, payload }) => {
  switch (type) {
    case "ADD_CHAR":
      return { ...state, Pokemones: payload };
    case "GET_BY_ID":
      return { SearchPokemon: payload };
    case "GET_BY_NAME":
      return { SearchPokemon: payload };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
