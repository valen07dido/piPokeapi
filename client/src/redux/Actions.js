const URL = import.meta.env.VITE_URL;
import axios from "axios";

export const addChar = () => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(URL);
      dispatch({
        type: "ADD_CHAR",
        payload: data,
      });
    } catch (error) {
      console.error({ error: error.message });
    }
  };
};
export const getById = (id) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL}${id}`);
      dispatch({
        type: "GET_BY_ID",
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
export const getByName = (name) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get(`${URL}?name=${name}`);

      dispatch({
        type: "GET_BY_NAME",
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
export const clearChar = () => {
  return (dispatch) => {
    try {
      dispatch({
        type: "CLEAR_CHAR",
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const createChar = (datos) => {
  return async (dispatch) => {
    const { data } = await axios.post(URL, datos);
    try {
      dispatch({
        type: "CREATE_CHAR",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const DeleteChar = (id) => {
  return async (dispatch) => {
    await axios.delete(`${URL}${id}`);
    try {
      dispatch({
        type: "DELETE_CHAR",
        payload: id,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const CreatedPokemons = () => {
  return async (dispatch) => {
    const { data } = await axios.get(`${URL}myPokemons`);
    try {
      dispatch({
        type: "CREATED_POKEMONS",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const GetTypes = () => {
  return async (dispatch) => {
    const { data } = await axios.get(`${URL}types`);
    try {
      dispatch({
        type: "GET_TYPES",
        payload: data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const filterType = (type) => {
  return {
    type: "FILTER_TYPE",
    payload: type,
  };
};
export const filterBddApi = (value) => {
  return {
    type: "FILTER_BDD_API",
    payload: value,
  };
};
export const OrderAlpha = (value) => {
  return {
    type: "ORDER_ALPHABET",
    payload: value,
  };
};
export const OrderAttacks = (value) => {
  return {
    type: "ORDER_ATTACKS",
    payload: value,
  };
};
export const ChangeAux = () => {
  return {
    type: "CHANGE_AUX",
  };
};
export const ClearFilters = () => {
  return {
    type: "CLEAR_FILTERS",
  };
};
