require("dotenv").config();
const { GET } = process.env;
const axios = require("axios");
const getById = require("./auxiliares/getByIdAPI");
const { Pokemon, Type } = require("../db");

const GetPokemonById = async (req, res) => {
  try {
    const { id } = req.params;
    if (id.length > 5) {
      try {
        const pokemon = await Pokemon.findByPk(id, {
          include: [
            {
              model: Type,
              attributes: ["nombre"],
              through: { attributes: [] },
            },
          ],
        });
        const transformedPokemones = {
          id: pokemon.id,
          name: pokemon.name,
          height: pokemon.height,
          tipos: pokemon.Types,
          image: pokemon.image,
          vida: pokemon.hp,
          ataque: pokemon.attack,
          defensa: pokemon.defense,
          velocidad: pokemon.speed,
          weight: pokemon.weight
        };
        if (!transformedPokemones) {
          return res.status(404).json({ error: "Pokemon no encontrado" });
        }
        return res.status(200).json(transformedPokemones);
      } catch (dbError) {
        return res.status(500).json({ error: dbError.message });
      }
    } else {
      const { data } = await axios(`${GET}${id}`);
      const pokemon= await getById(data)
     

      if (!pokemon) {
        return res.status(404).json({ error: "personaje no encontrado" });
      }
      return res.status(200).json(pokemon);
    }
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = GetPokemonById;
