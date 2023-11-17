require("dotenv").config();
const { GET } = process.env;
const axios = require('axios')
const EstructuradoApi= require('../estructurado de datos/estructuradoApi')

const getBynameAPI = async (nombre) => {
  try {
    const {data} = await axios.get(GET + nombre);
    if (data) {
      const pokemon=EstructuradoApi(data)
      return pokemon;
    } 
  } catch (error) {
    return null
  }
};


module.exports=getBynameAPI