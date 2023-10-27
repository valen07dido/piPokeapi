const { Pokemon } = require("../../db");
const GetbyNameBDD = async (nombre) => {
    try {
      const pokeDato = await Pokemon.findAll({
        where: { name: nombre }, // Aquí es donde se hizo el cambio
      });
  
      if (pokeDato && pokeDato.length > 0) {
        return pokeDato;
      } else {
        throw new Error("No se encontró ningún Pokémon con ese nombre.");
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  };
  
  module.exports = GetbyNameBDD;
