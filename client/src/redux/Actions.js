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
      const { data } = await axios.get(`http://localhost:3001/pokemon/${id}`);
      console.log('se busca por id');
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
      console.log(name)
      const { data } = await axios.get(`http://localhost:3001/pokemon/?name=${name}`);
      console.log('se busca por name');

      dispatch({
        type: "GET_BY_NAME",
        payload: data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
