require("dotenv").config();
const { URL_BASE, GET } = process.env;
const axios = require("axios");
const getBynameAPI = require("./auxiliares/getByNameAPI");
const GetbyNameBDD = require("./auxiliares/getByNameBDD");
const GetAllPokemons = async (req, res) => {
  const { name } = req.query;

  if (!name) {
    try {
      const { data } = await axios(URL_BASE);
      if (data) {
        return res.status(201).json(data.results);
      }
      return res.status(404).json({ error: "no hay personajes" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  } else {
    const nombre = name.toLowerCase();
    const dataApi = await getBynameAPI(nombre);
    const dataBDD = await GetbyNameBDD(nombre);
    try {
      if (!dataApi && dataBDD) {
        res.status(200).json(dataBDD);
      } else if (dataApi && !dataBDD) {
        res.status(200).json(dataApi);
      }else if(dataApi && dataBDD){
        res.status(200).json([dataApi,dataBDD]);
      }
      else{
        res.status(404).json('character not found')
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = GetAllPokemons;
