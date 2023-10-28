const { Pokemon, Type } = require("../db");

const PostPokemon = async (req, res) => {
  const { name, height, type, hp, attack, defense, speed, weight } = req.body;

  if (
    !name ||
    !height ||
    !type ||
    !hp ||
    !attack ||
    !defense ||
    !speed ||
    !weight
  ) {
    res.status(500).json({ message: error.message });
  }
  try {
    const [pokemon, created] = await Pokemon.findOrCreate({
      where: { name },
      defaults: { height, hp, attack, defense, speed, weight, type },
    });
    if (created) {
      if (Array.isArray(type)) {
        for (let i = 0; i < type.length; i++) {
          const [pokemonType] = await Type.findOrCreate({
            where: { nombre: type[i] },
          });
          await pokemon.addType(pokemonType);
        }
      } else {
        const [pokemonType] = await Type.findOrCreate({
          where: { nombre: type },
        });
        await pokemon.addType(pokemonType);
      }
    }

    const Creates = await Pokemon.findAll({
      include: [
        {
          model: Type,
          attributes: ["id", "nombre"],
          through: { attributes: [] },
        },
      ],
    });
    return res.status(201).json(Creates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = PostPokemon;
