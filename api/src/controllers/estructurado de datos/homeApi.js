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
    let datosFormateados = respuestas.map((respuesta) =>
      EstructuradoApi(respuesta.data)
    );
    console.log(datosFormateados);
    return datosFormateados;
  } catch (error) {
    console.error(error);
  }
};

module.exports = homeApi;
