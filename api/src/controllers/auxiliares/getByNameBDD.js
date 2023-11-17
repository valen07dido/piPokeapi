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
      const transformedPokemones = pokeDato.map(pokemon => ({
        id: pokemon.id,
        name: pokemon.name,
        height: pokemon.height,
        tipos: pokemon.Types.map(type => type.nombre),
        image: pokemon.image,
        vida: pokemon.hp,
        ataque: pokemon.attack,
        defensa: pokemon.defense,
        velocidad: pokemon.speed,
        weight: pokemon.weight
      }));
      
      if (pokeDato && pokeDato.length > 0) {
        return transformedPokemones[0];
      } else {
        throw new Error("No se encontró ningún Pokémon con ese nombre.");
      }
    } catch (error) {
     return null;
    }
  };
  
  module.exports = GetbyNameBDD;
