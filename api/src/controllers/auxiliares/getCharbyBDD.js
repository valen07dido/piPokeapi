const { Pokemon,Type } = require("../../db");

const getCharbyBDD = async () => {
  const pokemones = await Pokemon.findAll({
    include: [
      {
        model: Type,
        attributes: ["id", "nombre"],
        through: { attributes: [] },
      },
    ],
  });
  if (pokemones.length<=0) {
    return null;
  }
  return pokemones;
};

module.exports = getCharbyBDD;
