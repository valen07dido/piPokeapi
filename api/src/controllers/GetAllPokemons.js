require("dotenv").config();
const { URL_BASE, GET } = process.env;
const axios = require("axios");
const getBynameAPI = require("./auxiliares/getByNameAPI");
const GetbyNameBDD = require("./auxiliares/getByNameBDD");
const homeApi = require("./estructurado de datos/homeApi");
const getCharbyBDD = require("./auxiliares/getCharbyBDD");
const GetAllPokemons = async (req, res) => {
  const { name } = req.query;
  //mandaron un nombre por query?
  if (!name) {
    try {
      const { data } = await axios(URL_BASE);
      //data existe?
      if (data) {
        const datos = await homeApi(data.results);
        const datosBDD = await getCharbyBDD();
        if (datosBDD !== null) {
        const allPokes= datos.concat(datosBDD);
        return res.status(200).json(allPokes);
        }
        return res.status(201).json(datos);
      }
      return res.status(404).json({ error: "no hay personajes" });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
    //si enviaron nombre por query
  } else {
    const nombre = name.toLowerCase();
    const dataApi = await getBynameAPI(nombre);
    const dataBDD = await GetbyNameBDD(nombre);
    try {
      if (!dataApi && dataBDD) {
        res.status(200).json(dataBDD);
      } else if (dataApi && !dataBDD) {
        res.status(200).json(dataApi);
      } else if (dataApi && dataBDD) {
        res.status(200).json([dataApi, dataBDD]);
      } else {
        res.status(404).json("character not found");
      }
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
};

module.exports = GetAllPokemons;
