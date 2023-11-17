const { Pokemon, Type } = require("../db");

const PostPokemon = async (req, res) => {
  const { name, height, type, hp, attack, defense, speed, weight,image } = req.body;

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
      defaults: { height, hp, attack, defense, speed, weight,image },
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
      
      const createdPokemon = await Pokemon.findOne({
        where: { name },
        include: [
          {
            model: Type,
            attributes: ["id", "nombre"],
            through: { attributes: [] },
          },
        ],
      });

      return res.status(201).json(createdPokemon);
      
    } else {
      return res.status(200).json({ message: "El Pokémon ya existe" });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = PostPokemon;