const { Pokemon, Type } = require("../../db");
const GetbyNameBDD = async (nombre) => {
    try {
      const pokeDato = await Pokemon.findAll({
        where: { name: nombre }, 
        include: [
          {
            model: Type,
            attributes: ["id", "nombre"],
            through: { attributes: [] },
          },
        ],
      });
  
      if (pokeDato && pokeDato.length > 0) {
        return pokeDato;
      } else {
        throw new Error("No se encontró ningún Pokémon con ese nombre.");
      }
    } catch (error) {
     return null;
    }
  };
  
  module.exports = GetbyNameBDD;
