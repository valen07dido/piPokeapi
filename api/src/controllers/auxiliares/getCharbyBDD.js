const { Pokemon,Type } = require("../../db");

const getCharbyBDD = async () => {
  const pokemones = await Pokemon.findAll({
    include: [
      {
        model: Type,
        attributes: [ "nombre"],
        through: { attributes: [] },
      },
    ],
  });
  const transformedPokemones = pokemones.map(pokemon => ({
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
  if (pokemones.length<=0) {
    return null;
  }
  return transformedPokemones;
};

module.exports = getCharbyBDD;
