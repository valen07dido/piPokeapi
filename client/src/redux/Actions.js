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
      console.log("se busca por id");
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
      console.log(name);
      const { data } = await axios.get(`${URL}?name=${name}`);
      console.log("se busca por name");

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
    console.log(data)
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
