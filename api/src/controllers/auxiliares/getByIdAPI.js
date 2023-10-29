const EstructuradoApi = require("../estructurado de datos/estructuradoApi");
const getById = async (data) => {
  try {
    const pokemon = await EstructuradoApi(data);
    if (!pokemon) {
      return { error: "personaje no encontrado" };
    }
    return pokemon;
  } catch (error) {
    return { error: error.message };
  }
};
module.exports = getById;
