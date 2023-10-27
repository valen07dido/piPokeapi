const EstructureadoApi = require("../estructurado de datos/estructuradoApi");
const getById = async (data) => {
  try {
    const pokemon = await EstructureadoApi(data);
    if (!pokemon) {
      console.log(pokemon);
      return { error: "personaje no encontrado" };
    }
    return pokemon;
  } catch (error) {
    return { error: error.message };
  }
};
module.exports = getById;
