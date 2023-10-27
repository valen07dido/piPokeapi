require("dotenv").config();
const { GET } = process.env;
const axios = require("axios");
const getById = require("./auxiliares/getByIdAPI");
const { Pokemon } = require("../db");

const GetPokemonById = async (req, res) => {
  try {
    const { id } = req.params;
    if (id.length > 5) {
      try {
        const pokemon = await Pokemon.findByPk(id);
        if (!pokemon) {
          return res.status(404).json({ error: "Pokemon no encontrado" });
        }
        return res.status(200).json(pokemon);
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
