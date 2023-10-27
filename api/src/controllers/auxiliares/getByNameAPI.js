require("dotenv").config();
const { GET } = process.env;
const axios = require('axios')
const EstructureadoApi= require('../estructurado de datos/estructuradoApi')

const getBynameAPI = async (nombre) => {
  try {
    const {data} = await axios.get(GET + nombre);
    if (data) {
      const pokemon=EstructureadoApi(data)
      return pokemon;
    } 
  } catch (error) {
    console.log(error.message)
    return null
  }
};


module.exports=getBynameAPI