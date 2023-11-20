export const initialstate = {
  Pokemones: [],
  SearchPokemon: [],
  PokemonCreated: [],
  PokemonesCopy: [],
  Tipos: [],
  aux: true,
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
      return {
        ...state,
        PokemonCreated: [...state.PokemonCreated, payload],
        PokemonesCopy: [...state.PokemonesCopy, payload],
      };
    case "DELETE_CHAR":
      return {
        ...state,
        Pokemones: state.Pokemones.filter((pokemon) => pokemon.id !== payload),
        PokemonCreated: state.PokemonCreated.filter(
          (pokemon) => pokemon.id !== payload
        ),
        PokemonesCopy: state.PokemonesCopy.filter(
          (pokemon) => pokemon.id !== payload
        ),
      };
    case "CREATED_POKEMONS":
      return { ...state, PokemonCreated: payload };
    case "GET_TYPES":
      return { ...state, Tipos: payload };
    case "FILTER_TYPE":
      let copy = state.Pokemones.filter((poke) => poke.tipos.includes(payload));
     
      return {
        ...state,
        PokemonesCopy: copy,
      };
    case "FILTER_BDD_API":
      let copy2 = [];
      if (payload === "BDD") {
        copy2 = state.Pokemones.filter((poke) => {
          return poke.id.length === 36;
        });
      } else if (payload === "api") {
        copy2 = state.Pokemones.filter((poke) => {
          return Number(poke.id);
        });
      } else {
        copy2 = [];
      }
      return {
        ...state,
        PokemonesCopy: copy2,
      };
    case "ORDER_ALPHABET":
      let copy3 = [...state.Pokemones];
      if (payload === "A") {
        copy3.sort((a, b) => a.name.localeCompare(b.name));
      } else if (payload === "D") {
        copy3.sort((a, b) => b.name.localeCompare(a.name));
      } else {
        copy3 = null;
      }
      return {
        ...state,
        PokemonesCopy: copy3,
      };
    case "ORDER_ATTACKS":
      let copy4 = [...state.Pokemones];
      if (payload === "D") {
        copy4.sort((a, b) => a.ataque - b.ataque);
      } else if (payload === "A") {
        copy4.sort((a, b) => b.ataque - a.ataque);
      } else {
        copy4 = null;
      }
      return {
        ...state,
        PokemonesCopy: copy4,
      };
    case "CHANGE_AUX":
      return {
        ...state,
        aux: !state.aux,
      };
    case "CLEAR_FILTERS":
      return {
        ...state,
        PokemonesCopy: state.Pokemones,
      };
    default:
      return {
        ...state,
      };
  }
};

export default rootReducer;
