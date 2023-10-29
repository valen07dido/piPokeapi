require("dotenv").config();
const { GET_TYPE } = process.env;
const axios = require("axios");
const { Type } = require("../db");

const GetAllTypes = async (req, res) => {
  try {
    const { data } = await axios.get(GET_TYPE);

    const resultados = data.results;

    for (let i = 0; i < resultados.length; i++) {
      await Type.findOrCreate({ where: { nombre: resultados[i].name } });
    }
    const PokeTypes = await Type.findAll();
    res.status(200).json(PokeTypes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = GetAllTypes;
