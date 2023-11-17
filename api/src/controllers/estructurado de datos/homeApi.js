require("dotenv").config();
const { URL_BASE } = process.env;
const axios = require("axios");
const EstructuradoApi = require("./estructuradoApi");

const homeApi = async (array) => {
  try {
    let promesas = array.map((pokemon) =>
      axios.get(pokemon.url)
    );
    let respuestas = await Promise.all(promesas);
    let datosEstructurados = respuestas.map((respuesta) =>
      EstructuradoApi(respuesta.data)
    );
    return datosEstructurados;
  } catch (error) {
  }
};

module.exports = homeApi;
