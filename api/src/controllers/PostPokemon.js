const { Pokemon } = require("../db");

const PostPokemon = async (req, res) => {
  const { name, height, type, vida, ataque, defensa, velocidad, weight } =
    req.body;

  if (
    !name ||
    !height ||
    !type ||
    !vida ||
    !ataque ||
    !defensa ||
    !velocidad ||
    !weight
  ) {
    // res.status(500).json({ message: error.message });
  }
  try {
    await Pokemon.findOrCreate({
      where: { name },
      defaults: { height, type, vida, ataque, defensa, velocidad, weight },
    });

    const Creates = await Pokemon.findAll();
    return res.status(201).json(Creates);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports=PostPokemon
